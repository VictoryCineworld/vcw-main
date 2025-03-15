import React from "react";

const SocialFaqs = () => {
  const faqs = [
    {
      id: 1,
      question: "What are AI/ML development services?",
      answer:
        "AI/ML development services include solving business problems, increasing decision-making and automatic processes for creating and integrating artificial intelligence (AI) and machine learning models (ML). We at Victory Cineworld offer customized solutions that help you unlock your ability with your data."
    },
    {
      id: 2,
      question: "How can AI and ML benefit my business?",
      answer:
        "AI and ML can improve efficiency, automate repetitive tasks, increase customer experiences, predict trends, and provide actionable insights. These technologies help companies make smart decisions, reduce costs, and get competitive advantages. Contact us for more information."
    },
    {
      id: 3,
      question: "What types of AI and ML solutions do you offer?",
      answer:
        "We offer AI and ML solutions, including customized model development, data analysis, future data modeling, recommended systems, Natural Language Processing (NLP), and your specific requirements to suit automation equipment. Get a quote today."
    },
    {
      id: 4,
      question: "How long does it take to develop an AI/ML solution?",
      answer:
        "The development timeline depends on the complexity of the project and your requirements. Typically, AI/ML solutions take a few weeks to several months to develop, test, and deploy, depending on the scope and resources involved. Drop your query at hello@victorycineworld.com."
    },
    {
      id: 5,
      question: "What industries can benefit from AI/ML solutions?",
      answer:
        "Our AI/ML development services meet several industries, including health care, finance, retail, production, education, and more. We tailor the solution to unique challenges from your industry to develop and innovate. Connect with us to get AI-Powered Insights."
    },
    {
      id: 6,
      question: "Do you provide support after the AI/ML solution is deployed?",
      answer:
        "Yes, we at Victory Cineworld offer ongoing support and maintenance services to secure our AI/ML solutions better. This includes updates, troubleshooting, and promotion to meet the business requirements."
    },
    {
      id: 7,
      question: "What is the cost of AI/ML development services?",
      answer:
        "The cost varies depending on the complexity of your project, the type of AI/ML solution, and the extent of the work. At Victory Cineworld, we offer customized quotes after evaluating your needs and goals to ensure a cheap and scalable solution."
    },
    {
      id: 8,
      question: "How do you ensure data security in AI/ML projects?",
      answer:
        "We prioritize data security by implementing strong encryption, secure API, and best data management practices. We work with you to ensure that the AI/ML solution follows the industry's rules and protects sensitive data."
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
