import React from "react";

const SocialFaqs = () => {
  const faqs = [
    {
      id: 1,
      question: "What is project video production?",
      answer:
        "A project video focuses on presenting project developments through important events, phase achievements, and results. A project video production consists of various formats, such as project highlight videos, progress updates, case studies, and additional content."
    },
    {
      id: 2,
      question: "How long does it take to produce a video?",
      answer:
        "The required time for completion depends on how complex your project is. Basic video production is completed within a few days, but complex videos featuring both animations and interviews spanning diverse locations would need many weeks to complete."
    },
    {
      id: 3,
      question: "What types of videos do you create?",
      answer:
        "Our company creates multiple video types, including project highlights, case studies, testimonials, event summaries, and progress reports videos."
    },
    {
      id: 4,
      question: "Do I need to provide the script?",
      answer:
        "You can provide us with a script if you have one, but if you don’t have one, we also offer assistance in creating one from scratch. Our team guarantees that the script merges with your vision and organizational goals through a collaborative effort."
    },
    {
      id: 5,
      question: "What equipment do you use?",
      answer:
        "Our company uses special cameras and top-tier lighting and audio gear to provide excellent output during video production. Our team relies on industry-standard post-production software during video editing tasks."
    },
    {
      id: 6,
      question: "What is the difference between highlight videos and case study videos?",
      answer:
        "A highlight video presents project highlights, while a case study video tells the comprehensive story of project challenges, solutions, and outcomes."
    },
    {
      id: 7,
      question: "How do you align the video content with our brand?",
      answer:
        "Our team cooperates directly with you to learn all aspects of your brand identity and business goals. Our team takes complete charge of the video elements to make sure they embody your brand characteristics and messaging."
    },
    {
      id: 8,
      question: "Do you provide voice-over services?",
      answer:
        "Absolutely! As part of our services, we deliver specialized voice-overs in multiple languages and tone preferences to meet various project requirements. Contact us for more information and to create a compelling and engaging video."
    }
  ];

  return (
    <div className="fm-faq-area section-spacing">
      <div className="bd-accordion-fix">
        <div className="container wow fadeInUp" data-wow-delay="0.3s">
          <div className="row section-title-spacing">
            <div className="col-12">
              <div className="section-title text-center">
                <h2 className="section-main-title featured-sec-title featured-clr title-anim faq-sec-title">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
          <div className="fm-faq-content-wrapper">
            <div id="fmFaqAcc">
              <div className="row g-5 justify-content-center">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className="col-lg-6">
                    <div className="fm-faq-single fade_bottom_3">
                      <h4 className="fm-faq-single-title" id={`fmFaq-${index + 1}`}>
                        <button
                          className="fm-faq-single-button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#fmFaqcollapse-${index + 1}`}
                          aria-expanded="false"
                          aria-controls={`fmFaqcollapse-${index + 1}`}
                        >
                          {index + 1}. {faq.question}
                        </button>
                      </h4>
                      <div
                        id={`fmFaqcollapse-${index + 1}`}
                        className="fm-faq-single-collapse collapse"
                        aria-labelledby={`fmFaq-${index + 1}`}
                        data-bs-parent="#fmFaqAcc"
                      >
                        <div className="fm-faq-single-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFaqs;
