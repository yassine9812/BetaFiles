import React, { useState } from "react";
import SignUpcss from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function RegistrationForm() {
  const [errorMessages, setErrorMessages] = useState();

  const {
    register,
    handleSubmit,
    // watch,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(getValues());
    //Prevent page reload
    axios
      .post(
        //from userRoute
        "http://localhost:2000/signup",
        //from userSchema
        data,
        {
          
        }
      )
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages(error.response.data.messege);
      });
  };

  return (
    <section className={SignUpcss.container}>
      <form
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        className={SignUpcss.form}
      >
        <div className={SignUpcss.formbody}>
          <div className={SignUpcss.title}>Sign Up</div>

          <div className={SignUpcss.inputpos}>
            <label className={SignUpcss.labelstyle} htmlFor="firstName">
              First Name{" "}
            </label>
            <input
              className={SignUpcss.inputstyle}
              type="text"
              {...register("firstName", { required: true })}
              id="firstName"
              placeholder="Type Your First Name"
            />
            <div className={SignUpcss.errorstyle}>
              {errors.userFirstName?.type === "required" &&
                "First Name is required"}
            </div>
          </div>

          <div>
            <label className={SignUpcss.labelstyle} htmlFor="lastName">
              Last Name{" "}
            </label>
            <input
              className={SignUpcss.inputstyle}
              type="text"
              {...register("lastName", { required: true })}
              id="lastName"
              placeholder=" Type Your Last Name"
            />
            <div className={SignUpcss.errorstyle}>
              {errors.lastName?.type === "required" && "Last Name is required"}
            </div>
          </div>

          <div>
            <label className={SignUpcss.labelstyle} htmlFor="email">
              Email{" "}
            </label>
            <input
              className={SignUpcss.inputstyle}
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder="Type Your Mail"
            />
            <div className={SignUpcss.errorstyle}>
              {errors.email?.type === "required" && "Mail is required"}
            </div>
          </div>

          <div>
            <label className={SignUpcss.labelstyle} htmlFor="password">
              Password{" "}
            </label>
            <input
              className={SignUpcss.inputstyle}
              type="password"
              {...register("password", { required: true, minLength: 8 })}
              placeholder="Create a Password"
            />
            <div className={SignUpcss.errorstyle}>
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "minLength" && "Password is too short"}
            </div>
          </div>

          <div>
            <label className={SignUpcss.labelstyle} htmlFor="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className={SignUpcss.inputstyle}
              type="password"
              {...register("passwordConfirm", {
                required: true,
                validate: (value) => {
                  const { password } = getValues();

                  return password === value || "Your Password don't match";
                },
              })}
              id="passwordConfirm"
              placeholder="Confirm Your Password"
            />

            <div className={SignUpcss.errorstyle}>
              {errors.confirmPassword?.type === "required" &&
                "you need to confirm your password"}

              {errors.confirmPassword?.type === "validate" &&
                "Your Password don't match"}
            </div>
          </div>
        </div>
        {errorMessages}
        <div className={SignUpcss.buttonPos}>
          <button type="submit" className={SignUpcss.btn}>
            Register
          </button>
        </div>
      </form>
      <div className={SignUpcss.posimg}>
        <img src="image/undraw_authentication_re_svpt.svg" alt="Sign up"></img>
      </div>
    </section>
  );
}
export default RegistrationForm;
