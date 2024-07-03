import { useNavigate } from "react-router-dom";

const PaymentCancelled = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center space-y-10 bg-white shadow-md rounded-lg p-8 max-w-lg ">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Payment Cancelled
        </h1>

        <div className="flex justify-center mb-6">
          <svg
            className="w-24 h-24 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            If you have any questions or need assistance, please contact our
            support team.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Go to Homepage
          </button>
          {/* <button
            onClick={() => (window.location.href = "/retry-payment")}
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Retry Payment
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
