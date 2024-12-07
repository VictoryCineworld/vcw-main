import { review_schema } from "@utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import ErrorMsg from "./error-msg";

const ReviewForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        comment: "",
      },
      validationSchema: review_schema,
      onSubmit: (values, { resetForm }) => {
        toast.success("Register Successfull")
        resetForm();
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      id="contacts-form"
      className="conatct-post-form"
    >
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-icon p-relative mb-30 contacts-name">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
            />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-icon p-relative mb-30 contacts-name">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
            />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact-icon p-relative mb-30 contacts-email">
            <input
              name="subject"
              type="text"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Subject" />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact-icon p-relative mb-30 contacts-message">
            <textarea
              name="comment"
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
              id="comments"
              cols="30"
              rows="10"
              placeholder="Comments"
            ></textarea>
            {touched.comment && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xl-12">
          <button className="border-btn">Post Comment</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
