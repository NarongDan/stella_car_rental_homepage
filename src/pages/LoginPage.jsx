import LoginForm from "../features/authentication/component/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full h-screen mt-20">
      <div className="flex items-center justify-center bg-white pt-10 pb-20  w-[500px] rounded-lg mx-auto shadow-xl outline outline-2 outline-gray-100 ">
        <LoginForm />
      </div>
    </div>
  );
}
