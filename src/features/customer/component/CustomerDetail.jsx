import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import validateUpdate from "../../../validators/validate-update";
import authApi from "../../../apis/auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import Input from "../../authentication/component/Input";
import Textarea from "../../authentication/component/Textarea";
import LoadingSpinner from "../../../components/LoadingSpinner";

const initialInputError = {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export default function CustomerDetail() {
  const { authUser, fetchUser, isAuthUserLoading } = useAuth();
  const [input, setInput] = useState({});
  const [inputError, setInputError] = useState(initialInputError);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setInputError((prevError) => ({ ...prevError, [e.target.name]: "" }));
  };

  const handleCancelEdit = () => {
    setInput({});
    setInputError(initialInputError);
    setIsEditing(false);
  };

  const handleSubmitUpdate = async (e) => {
    try {
      e.preventDefault();
      const error = validateUpdate(input);

      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInputError });

      setLoading(true);

      await authApi.updateUserInfo(input);
      setInput({});
      fetchUser();
      toast.success("Updated successfully");
      setIsEditing(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response.data.field === "password") {
          setInputError((prev) => ({
            ...prev,
            password: "Invalid password",
          }));
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (isAuthUserLoading) {
    return <LoadingSpinner />;
  }
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-3xl text-black font-bold mb-6">My Details</h2>
      <form className="space-y-4" onSubmit={handleSubmitUpdate}>
        <div className="xl:flex xl:space-x-4 space-y-4 xl:space-y-0">
          <div className="xl:w-1/2 w-full">
            <label className="block text-black font-semibold">First Name</label>
            {isEditing ? (
              <Input
                type="text"
                name="firstName"
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                value={input.firstName || ""}
                onChange={handleChangeInput}
                placeholder={authUser?.firstName}
                error={inputError.firstName}
              />
            ) : (
              <p>{authUser?.firstName}</p>
            )}
          </div>
          <div className="xl:w-1/2 w-full">
            <label className="block text-black font-semibold">Last Name</label>
            {isEditing ? (
              <Input
                type="text"
                name="lastName"
                className="w-full mt-1 px-4 py-2 border rounded-lg "
                value={input.lastName || ""}
                onChange={handleChangeInput}
                placeholder={authUser.lastName}
                error={inputError.lastName}
              />
            ) : (
              <p>{authUser?.lastName}</p>
            )}
          </div>
        </div>
        <div className="xl:flex xl:space-x-4 space-y-4 xl:space-y-0">
          <div className="w-full">
            <label className="block text-black font-semibold">Email</label>
            {isEditing ? (
              <Input
                type="email"
                name="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg readonly"
                value={authUser?.email}
              />
            ) : (
              <p>{authUser?.email}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-black font-semibold">Phone</label>
            {isEditing ? (
              <Input
                type="text"
                name="phone"
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                value={input.phone || ""}
                onChange={handleChangeInput}
                placeholder={authUser?.phone}
                error={inputError.phone}
              />
            ) : (
              <p>{authUser?.phone}</p>
            )}
          </div>
        </div>
        <div className="xl:flex xl:space-x-4 space-y-4 xl:space-y-0">
          <div className="w-full">
            <label className="block text-black font-semibold">Address</label>
            {isEditing ? (
              <Textarea
                name="address"
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                rows="3"
                value={input.address || ""}
                onChange={handleChangeInput}
                placeholder={authUser?.address}
                error={inputError.address}
              />
            ) : (
              <p>{authUser?.address}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-black font-semibold">
              Driver License
            </label>
            {isEditing ? (
              <Input
                type="text"
                name="driverLicense"
                className="w-full mt-1 px-4 py-2 border rounded-lg readonly"
                value={authUser?.driverLicense || ""}
                error={inputError.driverLicense}
              />
            ) : (
              <p>{authUser?.driverLicense}</p>
            )}
          </div>
        </div>
        <div className="xl:flex xl:space-x-4 space-y-4 xl:space-y-0">
          {isEditing && (
            <>
              <div className="w-full">
                <label className="block text-black font-semibold">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  value={input.password || ""}
                  onChange={handleChangeInput}
                  error={inputError.password}
                />
              </div>
              <div className="w-full">
                <label className="block text-black font-semibold">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  value={input.confirmPassword || ""}
                  onChange={handleChangeInput}
                  error={inputError.confirmPassword}
                />
              </div>
            </>
          )}
        </div>
        {/* <div className="block text-black font-semibold">
          <p>
            Reward Points: <span>{authUser.totalPoints}</span>
          </p>
        </div> */}

        {!isEditing ? (
          <button
            type="button"
            className="mt-4 px-6 py-2 bg-secondary-color text-white rounded-lg hover:bg-thirdly-color transition ease-in-out duration-300"
            onClick={() => setIsEditing(true)}
          >
            Edit Information
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row gap-2 ">
            <button
              type="submit"
              className="sm:min-w-[150px] px-6 py-2 bg-secondary-color text-white rounded-lg hover:bg-thirdly-color transition ease-in-out duration-300"
            >
              Save
            </button>
            <button
              type="button"
              className="sm:min-w-[150px] px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-400 transition ease-in-out duration-300"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
