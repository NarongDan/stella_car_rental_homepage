import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center space-y-8 bg-white shadow-md rounded-xl p-8 max-w-lg">
        <h1 className=" text-4xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your transaction was completed
          successfully.
        </p>
        <div className="flex justify-center mb-6">
          <svg
            className="w-24 h-24 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"
            />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            A confirmation email has been sent to your email address.
          </p>
          <p className="text-gray-600 mb-6">
            If you have any questions, please contact our support team.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
