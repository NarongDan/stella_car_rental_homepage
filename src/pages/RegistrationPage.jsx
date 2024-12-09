import RegistrationForm from "../features/authentication/component/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className="w-full h-full my-20">
      <div className="flex items-center justify-center bg-white pt-10 pb-20 w-[390px]  lg:w-[500px] rounded-lg mx-auto shadow-xl outline outline-2 outline-gray-100">
        <RegistrationForm />
      </div>
    </div>
  );
}
