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
    if (e.target.value !== "" && e.target.value.trim())
      setInput({ ...input, [e.target.name]: e.target.value });
  };

  // อัพเดทข้อมูลหากร้องขอ

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
      toast.success("updated successfully");
      setIsEditing(false); // ปิดโหมดการแก้ไขเมื่อกด Save
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response.data.field === "password") {
          setInputError((prev) => ({
            ...prev,
            password: "invalid password",
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
          {/* First Name  */}
          <div className="xl:w-1/2 w-full">
            <label className="block text-black font-semibold">First Name</label>
            {isEditing ? (
              <Input
                type="text"
                name="firstName"
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                value={input.firstName}
                onChange={handleChangeInput}
                placeholder={authUser?.firstName}
                error={inputError.firstName}
              />
            ) : (
              <p>{authUser?.firstName}</p>
            )}
          </div>
          {/* Last Name  */}
          <div className="xl:w-1/2 w-full">
            <label className="block text-black font-semibold">Last Name</label>
            {isEditing ? (
              <Input
                type="text"
                name="lastName"
                className="w-full mt-1 px-4 py-2 border rounded-lg "
                value={input.lastName}
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
          {/* Email  */}
          <div className="md:w-1/2 w-full">
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
          {/* Phone  */}
          <div className="md:w-1/2 w-full">
            <label className="block text-black font-semibold">Phone</label>
            {isEditing ? (
              <Input
                type="text"
                name="phone"
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                value={input.phone}
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
          {/* Address  */}
          <div className="lg:w-1/2 w-full">
            <label className="block text-black font-semibold">Address</label>
            {isEditing ? (
              <Textarea
                name="address"
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                rows="3"
                value={input.address}
                onChange={handleChangeInput}
                placeholder={authUser?.address}
                error={inputError.address}
              />
            ) : (
              <p>{authUser?.address}</p>
            )}
          </div>

          {/* Driver License  */}
          <div className="md:w-1/2 w-full">
            <label className="block text-black font-semibold">
              Driver License
            </label>
            {isEditing ? (
              <Input
                type="text"
                name="driverLicense"
                className="w-full mt-1 px-4 py-2 border rounded-lg readonly"
                value={authUser?.driverLicense}
                error={inputError.driverLicense}
              />
            ) : (
              <p>{authUser?.driverLicense}</p>
            )}
          </div>
        </div>

        <div className="xl:flex xl:space-x-4 space-y-4 xl:space-y-0">
          {/* Password  */}
          {isEditing && (
            <>
              <div className="xl:w-1/2 w-full">
                <label className="block text-black font-semibold">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  value={input?.password}
                  onChange={handleChangeInput}
                  error={inputError.password}
                />
              </div>
            </>
          )}
          {/* Confirm Password  */}
          {isEditing && (
            <>
              <div className="md:w-1/2 w-full">
                <label className="block text-black font-semibold">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  value={input?.confirmPassword}
                  onChange={handleChangeInput}
                  error={inputError.confirmPassword}
                />
              </div>
            </>
          )}
        </div>

        {/* Reward Points  */}
        <div className="block text-black font-semibold">
          <p>
            Reward Points: <span>{`${authUser.totalPoints}`}</span>
          </p>
        </div>
        {/* Edit Button  */}
        {!isEditing && (
          <button
            type="button"
            className="mt-4 px-6 py-2 bg-secondary-color text-white rounded-lg hover:bg-thirdly-color transition ease-in-out duration-300"
            onClick={() => setIsEditing(true)}
          >
            Edit Information
          </button>
        )}

        {/* Save Button  */}
        {isEditing && (
          <div className="space-x-5">
            <button
              type="button"
              className="mt-4 px-6 py-2 bg-secondary-color text-white rounded-lg hover:bg-thirdly-color transition ease-in-out duration-300"
              onClick={handleSubmitUpdate}
            >
              Save
            </button>
            <button
              type="button"
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-400 transition ease-in-out duration-300"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
