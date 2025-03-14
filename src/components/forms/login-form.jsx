import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
// internal
import { login_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import UserThree from "@svg/user-3";
import Lock from "@svg/lock";
import EyeCut from "@svg/eye-cut";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        toast.success("Login successful")
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <span>
              <UserThree />
            </span>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                id="password"
              />
              <span>
                <Lock />
              </span>
            </div>
            <span
              className="login-input-eye"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
            </span>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>
      </div>

      <div className="login__option mb-25 d-sm-flex justify-content-between">
        <div className="login__remember">
          <input type="checkbox" id="tp-remember" />
          <label htmlFor="tp-remember">Remember me</label>
        </div>
        <div className="login__forgot">
          <Link href="/forgot-password">forgot password?</Link>
        </div>
      </div>
      <div className="login__btn text-center">
        <button type="submit" className="fill-btn">
          SignIn
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
