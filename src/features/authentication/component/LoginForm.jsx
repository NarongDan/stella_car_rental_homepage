import { AxiosError } from "axios";
import { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./Input";
import { useAuth } from "../../../context/AuthContext";
import validateLogin from "../../../validators/validate.login";
import { gapi } from "gapi-script";
import FacebookLoginButton from "./Facebook/FacebookLoginButton";
import GoogleLoginForm from "./Google/GoogleLoginForm";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const error = validateLogin(input);
      if (error) {
        setInputError(error);
        return;
      }
      await login(input);
      navigate("/");
      toast.success("Login successful");
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          error.response.status === 400
            ? "Invalid email or password"
            : "Internal server error";
        toast.error(message);
      }
    }
  };

  // Google Login

  // Facebook Login

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmitForm} className="grid gap-4">
        <p className="text-center font-semibold text-2xl text-black">LOGIN</p>
        <Input
          placeholder="Email address"
          value={input.email}
          name="email"
          onChange={handleChange}
          error={inputError.email}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={input.password}
          onChange={handleChange}
          error={inputError.password}
        />
        <button
          type="submit"
          className="w-full bg-secondary-color text-white px-3 py-1.5 font-bold rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Log in
        </button>
        {/* Divider */}
        <div className="flex items-center">
          <div className="flex-grow border-b border-gray-300"></div>
          <div className="px-4 text-sm text-gray-500">OR</div>
          <div className="flex-grow border-b border-gray-300"></div>
        </div>
      </form>
      <div className="grid gap-4 mt-4">
        <div className="flex justify-center items-center space-x-8">
          <GoogleLoginForm />
          <FacebookLoginButton />
        </div>

        <Link to="/register">
          <button className="w-full bg-secondary-color text-white px-3 py-1.5 font-bold rounded-md hover:bg-blue-700 transition-colors duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
