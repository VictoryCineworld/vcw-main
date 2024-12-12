import React from "react";

const FaqSection = () => {
  return (
    <div className="fm-faq-area section-spacing">
      <div className="bd-accordion-fix">
        <div className="container wow fadeInUp" data-wow-delay="0.3s">
          <div className="row section-title-spacing">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="section-main-title featured-sec-title featured-clr title-anim faq-sec-title">
                  Frequently Asked Question
                </h2>
              </div>
            </div>
          </div>
          <div className="fm-faq-content-wrapper">
            <div id="fmFaqAcc">
              <div className="row g-5 justify-content-center">
                <div className="col-lg-6">
                  <div className="fm-faq-single fade_bottom_3">
                    <h4 className="fm-faq-single-title" id="fmFaq-1">
                      <button
                        className="fm-faq-single-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fmFaqcollapse-1"
                        aria-expanded="false"
                        aria-controls="fmFaqcollapse-1"
                      >
                        1. What services does Victory Cineworld offer?
                      </button>
                    </h4>
                    <div
                      id="fmFaqcollapse-1"
                      className="fm-faq-single-collapse collapse show"
                      aria-labelledby="fmFaq-1"
                      data-bs-parent="#fmFaqAcc"
                    >
                      <div className="fm-faq-single-body">
                        <p>
                          Victory Cineworld offers a wide range of media and IT
                          services, including video production, content
                          creation, digital marketing, web development, and
                          software development.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="fm-faq-single fade_bottom_3">
                    <h4 className="fm-faq-single-title" id="fmFaq-2">
                      <button
                        className="fm-faq-single-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#fmFaqcollapse-2"
                        aria-expanded="false"
                        aria-controls="fmFaqcollapse-2"
                      >
                        2. What is your experience in the industry?
                      </button>
                    </h4>
                    <div
                      id="fmFaqcollapse-2"
                      className="fm-faq-single-collapse collapse"
                      aria-labelledby="fmFaq-2"
                      data-bs-parent="#fmFaqAcc"
                    >
                      <div className="fm-faq-single-body">
                        <p>
                          Our team has 30+ years of experience in the media and
                          IT industry. We have worked with clients of all sizes,
                          from startups to large corporations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="fm-faq-single fade_bottom_3">
                    <h4 className="fm-faq-single-title" id="fmFaq-3">
                      <button
                        className="fm-faq-single-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#fmFaqcollapse-3"
                        aria-expanded="false"
                        aria-controls="fmFaqcollapse-3"
                      >
                        3. How do you ensure the quality of your services?
                      </button>
                    </h4>
                    <div
                      id="fmFaqcollapse-3"
                      className="fm-faq-single-collapse collapse"
                      aria-labelledby="fmFaq-3"
                      data-bs-parent="#fmFaqAcc"
                    >
                      <div className="fm-faq-single-body">
                        <p>
                          We maintain high quality standards by using
                          state-of-the-art technology and following industry
                          best practices. Our team of skilled professionals is
                          dedicated to delivering exceptional results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="fm-faq-single fade_bottom_3">
                    <h4 className="fm-faq-single-title" id="fmFaq-4">
                      <button
                        className="fm-faq-single-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#fmFaqcollapse-4"
                        aria-expanded="false"
                        aria-controls="fmFaqcollapse-4"
                      >
                        4. What is your approach to content creation?
                      </button>
                    </h4>
                    <div
                      id="fmFaqcollapse-4"
                      className="fm-faq-single-collapse collapse"
                      aria-labelledby="fmFaq-4"
                      data-bs-parent="#fmFaqAcc"
                    >
                      <div className="fm-faq-single-body">
                        <p>
                          Our content creation process involves in-depth
                          research, creative writing, and effective
                          storytelling. We focus on creating engaging content
                          that resonates with your target audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="fm-faq-single fade_bottom_3">
                    <h4 className="fm-faq-single-title" id="fmFaq-5">
                      <button
                        className="fm-faq-single-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#fmFaqcollapse-5"
                        aria-expanded="false"
                        aria-controls="fmFaqcollapse-5"
                      >
                        5. How do you handle project timelines and deadlines?
                      </button>
                    </h4>
                    <div
                      id="fmFaqcollapse-5"
                      className="fm-faq-single-collapse collapse"
                      aria-labelledby="fmFaq-5"
                      data-bs-parent="#fmFaqAcc"
                    >
                      <div className="fm-faq-single-body">
                        <p>
                          We prioritize efficient project management and adhere
                          to strict timelines. Our team works diligently to
                          ensure timely delivery without compromising quality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="fm-faq-single fade_bottom_3">
                    <h4 className="fm-faq-single-title" id="fmFaq-6">
                      <button
                        className="fm-faq-single-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#fmFaqcollapse-6"
                        aria-expanded="false"
                        aria-controls="fmFaqcollapse-6"
                      >
                        6. What is your pricing structure?
                      </button>
                    </h4>
                    <div
                      id="fmFaqcollapse-6"
                      className="fm-faq-single-collapse collapse"
                      aria-labelledby="fmFaq-6"
                      data-bs-parent="#fmFaqAcc"
                    >
                      <div className="fm-faq-single-body">
                        <p>
                          Our pricing is competitive and tailored to your
                          specific needs. We offer flexible pricing options to
                          accommodate different budgets.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="fm-faq-single fade_bottom_3">
                    <h4 className="fm-faq-single-title" id="fmFaq-7">
                      <button
                        className="fm-faq-single-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#fmFaqcollapse-7"
                        aria-expanded="false"
                        aria-controls="fmFaqcollapse-7"
                      >
                        7. Can you provide examples of your work?
                      </button>
                    </h4>
                    <div
                      id="fmFaqcollapse-7"
                      className="fm-faq-single-collapse collapse"
                      aria-labelledby="fmFaq-7"
                      data-bs-parent="#fmFaqAcc"
                    >
                      <div className="fm-faq-single-body">
                        <p>
                          Yes, we have a portfolio of previous projects that
                          showcase our work. We can provide you with case
                          studies and client testimonials.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="fm-faq-single fade_bottom_3">
                    <h4 className="fm-faq-single-title" id="fmFaq-8">
                      <button
                        className="fm-faq-single-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#fmFaqcollapse-8"
                        aria-expanded="false"
                        aria-controls="fmFaqcollapse-8"
                      >
                        8. How can I get in touch with you to discuss my project?
                      </button>
                    </h4>
                    <div
                      id="fmFaqcollapse-8"
                      className="fm-faq-single-collapse collapse"
                      aria-labelledby="fmFaq-8"
                      data-bs-parent="#fmFaqAcc"
                    >
                      <div className="fm-faq-single-body">
                        <p>
                          You can contact us through our website, email, or
                          phone number. We&apos;re always happy to answer your
                          questions and discuss your project requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
