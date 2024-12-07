import Email from "@svg/email";
import { forgotten_schema } from "@utils/validation-schema";
import React from "react";
import ErrorMsg from "./error-msg";
import { useFormik } from "formik";

const ForgotForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: forgotten_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
            />
            <span>
              <Email />
            </span>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
      </div>
      <div className="login__btn text-center">
        <button type="submit" className="fill-btn">
          Send request
        </button>
      </div>
    </form>
  );
};

export default ForgotForm;
