import React from "react";

const VPFAQs = () => {
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
                        1. What is the typical turnaround time for a video
                        project?
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
                          The turnaround time for a video project can vary
                          depending on the complexity and scope of the project.
                          However, we strive to deliver projects efficiently
                          without compromising quality. We&apos;ll provide you with a
                          detailed timeline during the initial consultation.
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
                        2. What is your pricing structure?
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
                          Our pricing is customized based on the specific needs
                          of each project. Factors such as video length,
                          complexity, and post-production requirements influence
                          the final cost. We&apos;ll provide a detailed quote after
                          understanding your project requirements.
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
                        3.Do you offer video editing services?
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
                          Yes, we offer comprehensive video editing services,
                          including editing, color grading, sound mixing, and
                          special effects. Our skilled editors can bring your
                          vision to life.
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
                        4.How Long Does it Take to See Results from Digital
                        Marketing?
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
                          The time it takes to see results from digital
                          marketing can vary depending on various factors, such
                          as your industry, competition, and the specific
                          strategies implemented. However, with consistent
                          efforts and effective strategies, you can start seeing
                          results within a few months.
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
                        5. How Much Does Digital Marketing Cost?
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
                          The cost of digital marketing services can vary
                          depending on your specific needs and budget. We offer
                          flexible pricing plans to suit different business
                          requirements.
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
                        6. How Do You Measure the Success of a Digital Marketing
                        Campaign?
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
                          We use a variety of metrics to measure the success of
                          our digital marketing campaigns, including website
                          traffic, conversions, social media engagement, and
                          return on investment (ROI).
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
                        7.Do You Offer Social Media Management Services?
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
                          Yes, we offer social media management services to help
                          you create and curate engaging content, build a strong
                          online presence, and interact with your audience.
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
                        8.Can You Help Me with Local SEO?
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
                          Absolutely! We specialize in local SEO to help
                          businesses attract local customers and improve their
                          visibility on local search engines.
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

export default VPFAQs;
