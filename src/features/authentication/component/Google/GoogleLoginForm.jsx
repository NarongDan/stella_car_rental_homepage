import { gapi } from "gapi-script";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

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

  const handleGoogleLoginSuccess = async (response) => {
    const profile = {
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
    };
    try {
      navigate("/register", { state: { profile } });
      location.reload(); // ใช้ logout
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
      buttonText="Sign up with Google"
      onSuccess={handleGoogleLoginSuccess}
      onFailure={handleGoogleLoginFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={false}
    />
  );
}
