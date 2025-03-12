import React from "react";

const SocialFaqs = () => {
  const faqs = [
    {
      id: 1,
      question: "What types of mobile apps do you develop?",
      answer:
"We specialize in both native and cross-platform app development for iOS and Android. Whether you seek a business app, e-commerce app, or a custom solution, we create tremendous apps tailored to your needs."    },
    {
      id: 2,
      question: "How long does it take to develop a mobile app?",
      answer:
"The timeline depends on the app's complexity, features, and involved platforms. Generally, it takes anywhere from some weeks to numerous months. We'll work with you to define clear milestones and ensure timely delivery."    },
    {
      id: 3,
      question: "What is the cost of mobile app development?",
      answer:
"The cost varies based on the assignment scope, layout complexity, and required functionality. At Victorycineworld, we offer custom costs after comparing your app necessities and undertaking dreams."    },
    {
      id: 4,
      question:
        "Do you offer post-launch support?",
      answer:
"Yes, we will provide ongoing support and maintenance for your app after its release. This consists of bug fixes, updates, overall performance improvements, and adapting the app to new OS versions."    },
    {
      id: 5,
      question: "What technologies do you use for mobile app development?",
      answer:
        "We use ultra-modern technologies like React Native, Flutter, Xamarin, and native improvement tools like Swift (iOS) and Kotlin (Android) to build robust, high-performance mobile apps.",
    },
    {
      id: 6,
      question: "Can you integrate third-party services into my app?",
      answer:
" Absolutely! We can combine third-party services like payment gateways, social media, maps, and analytics to beautify your app’s functionality and provide a seamless user experience."    },
    {
      id: 7,
      question: "How do you ensure the security of my mobile app?",
      answer:
"Security is a top priority for us. We implement industry-standard practices, which include data encryption, secure APIs, and user authentication to protect your app and customers' information."    },
    {
      id: 8,
      question: "Will my app be available on both the Apple App Store and Google Play Store?",
      answer:
"Yes, we handle with the entire app submission process to both the Apple App Store and Google Play Store, ensuring your app meets all platform recommendations for approval and visibility."    },
  ];

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
