import React from "react";

const SocialFaqs = () => {
  const faqs = [
    {
      id: 1,
      question: "What is post-production in filmmaking?",
      answer:
        "Post-production is the process of editing raw footage, adding visual effects, sound design, and color correction to create a polished final product ready for distribution.",
    },
    {
      id: 2,
      question: "How long does post-production take?",
      answer:
        "The duration depends on the complexity of the project, the number of edits required, and special effects. It can take anywhere from a few weeks to several months.",
    },
    {
      id: 3,
      question: "What is the cost of post-production services?",
      answer:
        "The cost varies based on factors such as video length, editing complexity, and required enhancements. VictoryCineworld provides customized pricing based on project needs.",
    },
    {
      id: 4,
      question: "Do you offer revisions in post-production?",
      answer:
        "Yes, we provide multiple revisions to ensure the final product aligns with your vision. Our goal is to deliver a high-quality output that meets your expectations.",
    },
    {
      id: 5,
      question: "What software do you use for post-production?",
      answer:
        "We use industry-standard software like Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and After Effects for professional editing and visual enhancements.",
    },
    {
      id: 6,
      question: "Can you add visual effects and animations?",
      answer:
        "Absolutely! We offer VFX, motion graphics, and animation services to enhance your video content and create a visually stunning experience.",
    },
    {
      id: 7,
      question: "How do you ensure high-quality sound design?",
      answer:
        "We use advanced audio editing techniques, noise reduction, and sound effects to enhance the audio quality and create an immersive experience for viewers.",
    },
    {
      id: 8,
      question: "Can you help with video distribution after post-production?",
      answer:
        "Yes, we offer guidance on distributing your content on platforms like YouTube, social media, and streaming services to maximize audience reach.",
    },
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
                  <div key={faq.id} className={`col-lg-6`}>
                    <div className="fm-faq-single fade_bottom_3">
                      <h4
                        className="fm-faq-single-title"
                        id={`fmFaq-${index + 1}`}
                      >
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