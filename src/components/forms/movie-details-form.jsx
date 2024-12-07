import React from "react";

const MovieDetailsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input type="text" placeholder="Name" />
        </div>
        <div className="col-xl-6">
          <input type="email" placeholder="Email" />
        </div>
        <div className="col-xl-12">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Type your comment..."
          ></textarea>
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default MovieDetailsForm;
