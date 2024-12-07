import React from 'react';

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
                        How do i access the pictures on web site?
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
                          Open the website where the pictures are located.
                          Navigate to the page where the pictures are located.
                          Look for a button or link that
                          {`says "View photos," "Gallery,"`} or something
                          similar.
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
                        When does a certain movie come out on dvd?
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
                          Check the official website of the movie: Many movie
                          studios or distributors have official websites for
                          their films, and they often provide information
                          about DVD release dates.
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
                        How do i get tickets to movie premieres?
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
                          Join a fan club: Some movie studios have fan clubs
                          that offer special perks, including access to movie
                          premieres. Check the {`studio's`} website or social
                          media pages for information on how to join.
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
                        How do i submit ideas or scripts to be considered?
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
                          Find a literary agent: Many film and TV production
                          companies require that submissions come through a
                          literary agent. You can search for literary agents
                          who represent your genre or type of content
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
                        How can i contact a certain actor/actress or
                        filmmaker?
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
                          Social media: Many actors, actresses, and filmmakers
                          have social media accounts, such as Twitter,
                          Instagram, or Facebook, where you can send them a
                          message or tag them in a post.
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
                        Can I check my gift card balance?
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
                          Look for the website or phone number listed on the
                          back of the gift card. Go to the website or call the
                          phone number provided. Enter the gift card number
                          and the security code.
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
                        How can I cancel an order for a refund?
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
                          Check the {`company's`} cancellation policy: Before
                          canceling your order, check the {`company's`}
                          cancellation policy to make sure you are eligible
                          for a refund. Some companies may have a deadline or
                          specific conditions for cancellations.
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
                        What is Showcase Super Lux?
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
                          Showcase Super Lux is a premium cinema brand that
                          offers a luxury movie-watching experience. Showcase
                          Super Lux cinemas typically have large, comfortable
                          seats with ample legroom, reserved seating.
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