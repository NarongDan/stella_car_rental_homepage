import axios from "../config/axios";

const chatApi = {};

chatApi.createChatroom = () => axios.post("/chat/chatroom");

export default chatApi;
