import React, { useState } from "react";
import Logincss from "./Login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [errorMessages, setErrorMessages] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    axios
      .post(
        //from userRoute
        "http://localhost:2000/login",
        //from userSchema
        { email, password },
      )
      .then((response) => {
        setIsSubmitted(true);
        // store user
        navigate("/Account");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages(error.response.data.messege);
      });
  };
  // console.log(email,password)

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={Logincss.error}>{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className={Logincss.form}>
      <img src="image/logo/logo.png" width="200px" alt="logo"></img>
      <form onSubmit={handleSubmit}>
        <div className={Logincss.title}>Login</div>
        <div className={Logincss.inputcontainer}>
          <label className={Logincss.labelstyle}>Mail </label>
          <input
            className={Logincss.inputstyle}
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={Logincss.inputcontainer}>
          <label className={Logincss.labelstyle}>Password </label>
          <input
            className={Logincss.inputstyle}
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={Logincss.buttoncontainer}>
          {/* ta7t div naamlo design taa error message */}
          <div>{errorMessages}</div>
          <button className={Logincss.btn} type="submit">
            {" "}
            Login{" "}
          </button>
          <button className={Logincss.btn2} type="submit">
            {" "}
            <Link to="/SignUp"> Sign Up </Link>{" "}
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <div className={Logincss.app}>
      <div className={Logincss.loginform}>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <div className={Logincss.imgpos}>
        <img src="image/undraw_online_resume_re_ru7s.svg" alt="signin"></img>
      </div>
    </div>
  );
}

export default Login;
