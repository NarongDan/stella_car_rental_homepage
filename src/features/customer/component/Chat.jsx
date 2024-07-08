import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import admin from "../../../asset/image/admin.png";
import user from "../../../asset/image/user.png";
import { useAuth } from "../../../context/AuthContext";
import chatApi from "../../../apis/chat";

// เชื่อมต่อกับเซิร์ฟเวอร์ Socket.IO
const socket = io("http://localhost:8888");

const Chat = () => {
  const { authUser } = useAuth();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatRoomId, setChatRoomId] = useState(null); // ID ของ ChatRoom ที่ Customer กำลังสนทนาอยู่
  const customerId = authUser?.customerId; // ID ของ Customer

  // เมื่อกด send ให้เลื่อนลงมาล่างสุด
  const chatContainerRef = useRef(null);
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      console.dir(chatContainerRef.current);
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  //

  // สร้าง ChatRoom และเข้าร่วมห้องแชทเมื่อ component ถูก mount
  useEffect(() => {
    const initiateChatRoom = async () => {
      try {
        //เมื่อกดเข้ามาที่Chat  จะทำการสร้างChatRoomID  หากมีอยู่แล้วให้ใช้ของเก่า โดยที่backend จะเป็นคนเช็คและส่งกลับมา
        const response = await chatApi.createChatroom();
        const data = response.data;
        setChatRoomId(data.chatRoomId);

        // ส่ง ChatRoomID ไปให้ฝั่ง Admin ผ่าน Socket.IO
        socket.emit("initiateChat", {
          chatRoomId: data.chatRoomId,
          customerId: customerId,
        });
      } catch (error) {
        console.error("Error initiating chat room:", error);
      }
    };

    if (customerId) {
      initiateChatRoom();
    }
  }, [customerId]);

  // เข้าร่วมห้องแชทเมื่อ chatRoomId เปลี่ยนแปลง
  useEffect(() => {
    if (chatRoomId) {
      socket.emit("joinRoom", { chatRoomId });
      socket.on("roomMessages", (msgs) => {
        setMessages(msgs);
      });
    }
  }, [chatRoomId]);

  // รับข้อความใหม่จาก Socket.IO
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message || !chatRoomId) return;

    const newMessage = {
      chatRoomId,
      senderId: customerId,
      senderType: "Customer",
      message,
    };

    socket.emit("message", newMessage);
    setMessage("");
  };

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-secondary-color px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          {/* Top bar  */}
          <div className="w-full md:pl-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-green-500 border-2 max-w-[45px] p-[2px] rounded-full"
                    src={admin}
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0"></div>
                </div>
                <h2 className="text-base text-white font-semibold">Admin</h2>
              </div>
            </div>

            {/* Conversation Board  */}
            <div className="py-4">
              <div
                className="bg-[#475569] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto"
                ref={chatContainerRef}
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`w-full flex ${
                      msg.senderType === "Customer"
                        ? "justify-end"
                        : "justify-start"
                    } items-center`}
                  >
                    <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                      {msg.senderType !== "Customer" && (
                        <div>
                          <img
                            src={admin}
                            alt=""
                            className="w-[38px] h-[38px] border-2 border-green-500 rounded-full max-w-[38px] p-[3px]"
                          />
                        </div>
                      )}
                      <div
                        className={`flex justify-center items-start flex-col w-full ${
                          msg.senderType === "Customer"
                            ? "bg-red-500"
                            : "bg-blue-500"
                        } shadow-lg text-white py-1 px-2 rounded-sm`}
                      >
                        <span>{msg.message}</span>
                      </div>
                      {msg.senderType === "Customer" && (
                        <div>
                          <img
                            src={user}
                            alt=""
                            className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Area  */}
            <form className="flex gap-3" onSubmit={sendMessage}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]"
                placeholder="Input your message"
              />
              <button className="shadow-lg bg-[#06b6d4] hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
