import React from "react";
import './signup.css'
// import styles from "./style.module.css";
import { FaGoogle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { auth, provider } from "../../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Toast } from "../utils/Toast";

export const SignUp = ({ setResponse }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setResponse(user);
        Toast("Login Successful", "success");
        navigate("/Dashboard");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // Handle error here or provide user feedback
        console.error(error);
        Toast(errorMessage, "error");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user, "user");
        Toast("Signup Successful", "success");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error here or provide user feedback
        Toast(errorMessage, "error");
        console.error(error);
      });
  };
  return (
    <>
      <div className="containerlogin">
        <div className="page1">
          <h1>Attendify.</h1>
          <p>
            Count your students In, <br />
            Not out.
          </p>
        </div>
        <div className="page2">
          <form className="form" onSubmit={handleSubmit}>
            <p id="heading">Sign Up</p>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                autocomplete="off"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                type="email"
              />
            </div>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                placeholder="Password"
                className="input-field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn">
              <button className="button1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RouterLink to="/">Login</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button className="button2">Sign Up</button>
            </div>
            <button className="button3">Forgot Password</button>
          </form>
        </div>
        {/* <div className={styles.page2}>
          <div className={styles.loginform}>
            <h2>Login to your account</h2>
            <p>Enter email below to login to your account</p>
            <div className={styles.difauth}>
              <button onClick={handleGoogleSignIn}>
                <FaGoogle />
                Continue with Google
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputfield}>
                <p>Email</p>
                <input
                  type="text"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputfield}>
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.submitbtn}>
                <button>Login</button>
              </div>
            </form>

            <div className={styles.haveanAcount}>
              <p> */}
        {/* Don't have an account?{" "} */}
        {/* <RouterLink to="/Signup">Signup</RouterLink>   */}
        {/* </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
