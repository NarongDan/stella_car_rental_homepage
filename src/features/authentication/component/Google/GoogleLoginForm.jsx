import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginForm() {
  const navigate = useNavigate();

  const CLIENT_ID =
    "489301703602-5qnb372i6bbm4bdbhjvs9p3km5j6tu37.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const handleGoogleLoginSuccess = (response) => {
    const profile = {
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
    };
    try {
      navigate("/register", { state: { profile } });
    } catch (error) {
      console.error("Error navigating to register page:", error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full shadow hover:shadow-lg"
        >
          <FcGoogle size={30} />
        </button>
      )}
      buttonText="Sign up with Google"
      onSuccess={handleGoogleLoginSuccess}
      onFailure={handleGoogleLoginFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={false}
    />
  );
}
