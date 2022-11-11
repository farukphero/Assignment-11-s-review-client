import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SocialSignIn = () => {
  const { providerGoogleLogIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    providerGoogleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            //   console.log(data)
            navigate(from, { replace: true });
          });
        // navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        setPasswordError(error.message);
      });
  };
  return (
    <div>
      <p className="text-red-300">{passwordError}</p>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline mt-5 font-bold text-center w-full mx-auto"
      >
        Google
      </button>
    </div>
  );
};

export default SocialSignIn;
