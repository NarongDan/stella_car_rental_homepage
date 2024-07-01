import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../ultis/local-storage";
import { toast } from "react-toastify";
import authApi from "../apis/auth";
import { useContext } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      // ในหน้า homepage เมื่อกด refresh
      if (getAccessToken()) {
        // เช็คว่ามี token ไหม
        const res = await authApi.getAuthUser();

        setAuthUser(res.data); // fetchdata ของ user ในกรณีที่มีการ login ไว้แล้ว  หากtoken มีปัญหา หรือหมดอายุ ต้องทำอะไรบางอย่าง  ที่เขียนไว้ใน interceptors ของ axios ตรง response.use
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsAuthUserLoading(false);
    }
  };

  // useEffect จะทำงานตามลำดับ  ตัวบนจะเสร็จก่อนตัวล่าง // ไม่สามารถใช้ async /await ใน useEffect ได้ ต้องสร้างfn wrapper ขึ้นมาใช้แทน

  const login = async (credentials) => {
    const res = await authApi.login(credentials);

    setAccessToken(res.data.accessToken);

    const resGetAuthUser = await authApi.getAuthUser(); // ค่าที่ได้มาจาก axios

    setAuthUser(resGetAuthUser.data); //
    return res.data;
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
    toast.warning("logout already");
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, authUser, isAuthUserLoading, fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
