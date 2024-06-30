import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import authApi from "../../../apis/auth";
import { toast } from "react-toastify";
import Input from "./Input";
import Textarea from "./Textarea";
import validateRegister from "../../../validators/validate-register";

const initialInput = {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
  driverLicense: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialInputError = {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
  driverLicense: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegistrationForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  useEffect(() => {
    if (location.state && location.state.profile) {
      const { profile } = location.state;
      setInput((prev) => ({
        ...prev,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
      }));
    }
  }, [location.state]);

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInput });

      await authApi.register(input);

      toast.success("Registered successfully, please log in to continue");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.data.field === "email") {
        setInputError((prev) => ({
          ...prev,
          email: "Email already in use",
        }));
      }
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <p className="mb-10 text-center font-semibold text-2xl text-black">
        REGISTRATION
      </p>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="col-span-2 flex flex-col">
          <Input
            placeholder="First Name"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
            error={inputError.firstName}
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Input
            placeholder="Last Name"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
            error={inputError.lastName}
          />
        </div>

        <div className="col-span-2 flex flex-col">
          <Textarea
            placeholder="Address"
            name="address"
            value={input.address}
            onChange={handleChangeInput}
            error={inputError.address}
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Input
            placeholder="Phone number"
            name="phone"
            value={input.phone}
            onChange={handleChangeInput}
            error={inputError.phone}
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Input
            placeholder="Driver License"
            name="driverLicense"
            value={input.driverLicense}
            onChange={handleChangeInput}
            error={inputError.driverLicense}
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Input
            placeholder="Email address"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            error={inputError.email}
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            error={inputError.password}
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            error={inputError.confirmPassword}
          />
        </div>
        <div className="col-span-2 text-center">
          <button className="w-full bg-secondary-color text-white px-3 py-1.5 mt-4 font-bold rounded-md hover:bg-blue-700 transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
