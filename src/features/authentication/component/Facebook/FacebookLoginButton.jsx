import React from "react";
import useFacebookSDK from "./useFacebookSDK.js";
import { useNavigate } from "react-router-dom";

const FacebookLoginButton = () => {
  const navigate = useNavigate();

  useFacebookSDK("999391594638891"); // ใส่ appId ของคุณ

  const handleFacebookLogin = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status === "connected") {
        window.FB.logout(() => {
          doFacebookLogin();
        });
      } else {
        doFacebookLogin();
      }
    });
  };

  const doFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          window.FB.api("/me", { fields: "name,email" }, (response) => {
            if (response && !response.error) {
              handleFacebookRegister(response);
            } else {
              console.error("Facebook API error:", response.error);
            }
          });
        } else {
          console.error("Facebook login failed:", response);
        }
      },
      { scope: "public_profile,email" }
    );
  };

  const handleFacebookRegister = async (profile) => {
    const userProfile = {
      firstName: profile.name.split(" ")[0],
      lastName: profile.name.split(" ")[1],
      email: profile.email,
    };
    try {
      navigate("/register", { state: { profile: userProfile } });
    } catch (error) {
      console.error("Error navigating to register page:", error);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleFacebookLogin}
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up with Facebook
      </button>
    </div>
  );
};

export default FacebookLoginButton;
