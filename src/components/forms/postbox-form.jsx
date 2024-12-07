import { postbox_schema } from '@utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import ErrorMsg from './error-msg';

const PostboxForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        comment: ""
      },
      validationSchema: postbox_schema,
      onSubmit: (values, { resetForm }) => {
        toast.success("Post Successfull")
        resetForm();
      },
    });
  return (
    <div className="postbox__comment-wrapper ">
      <div className="postbox__comment-form mb-70">
        <h3 className="postbox__comment-title">Leave A Reply</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input
                  type="text"
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name*"
                />
                {touched.name && <ErrorMsg error={errors.name} />}
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input
                  type="email"
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Email*" />
                {touched.email && <ErrorMsg error={errors.email} />}
              </div>

            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-input">
                <textarea
                  name='comment'
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Write Comment">
                </textarea>
                {touched.comment && <ErrorMsg error={errors.comment} />}
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-check mb-60">
                <input
                  className="e-check-input"
                  type="checkbox"
                  id="e-agree"
                />
                <label className="e-check-label" htmlFor="e-agree">
                  I agree that my submitted data is being collected and
                  stored. *
                </label>
              </div>
            </div>
            <div className="col-xl-12">
              <button type="submit" className="fm-submit-btn">
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostboxForm;