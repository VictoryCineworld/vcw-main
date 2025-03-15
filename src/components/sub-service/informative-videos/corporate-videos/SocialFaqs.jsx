import React from "react";

const SocialFaqs = () => {
  const faqs = [
    {
      id: 1,
      question: "What is website development?",
      answer:
        "Website development is the technique of building and maintaining web sites. It includes designing, coding, content advent, and ensuring capability. At Victory Cineworld, our website improvement provider ensures that your internet site is consumer-pleasant, responsive, and meets your enterprise dreams. Learn more right here.",
    },
    {
      id: 2,
      question: "Why should I hire a website development agency?",
      answer:
"A website development company brings information, resources, and custom solutions to create a unique on-line presence. At Victory Cineworld, we ensure your website is adapted on your desires, offering professional design, capability, and long-term aid. Discover our offerings."    },
    {
      id: 3,
      question: "How long does website development take?",
      answer:
"The timeline for website improvement varies primarily based on the complexity and scope of your mission. Typically, it ranges from some weeks to numerous months. At Victory Cineworld, we set up realistic timelines and make sure timely transport. Contact us for extra info."    },
    {
      id: 4,
      question:
        "What services are included in website development?",
      answer:
        "Our website improvement provider consists of layout, development, checking out, content material integration, search engine marketing optimization, and ongoing aid. At Victory Cineworld, we provide whole solutions to make sure your website is practical, user-friendly, and meets your desires. Explore our services.",
    },
    {
      id: 5,
      question: "Can you redesign my existing website?",
      answer:
"Yes! We concentrate on remodeling previous websites to enhance personal experience, mobile responsiveness, and overall SEO performance. Our team at Victory Cineworld can modernize your website online and improve your capability to meet nowadays’s virtual standards. "    },
    {
      id: 6,
      question: "Is website maintenance included?",
      answer:
"Yes, ongoing website maintenance is part of our services. At Victory Cineworld, we offer continuous support, including software updates, security patches, and content updates to keep your website running smoothly."    },
    {
      id: 7,
      question: "Do you offer eCommerce website development?",
      answer:
"Yes, we provide specialized eCommerce website development services to help businesses sell online. We build secure, responsive, and scalable eCommerce platforms that offer a seamless shopping experience. "    },
    {
      id: 8,
      question: "What is the cost of website development?",
      answer:
"The cost of website development depends on your project’s scope, features, and complexity. At Victory Cineworld, we offer custom quotes based on your unique requirements. Contact us to discuss your project and get a detailed proposal."    },
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
