import React from "react";

const SocialMediaService = () => {
  const faqs = [
    {
      id: 1,
      question: "What are Project Highlight Videos?",
      answer:
        "This video highlights a project's key moments and achievements, which gives viewers a quick, engaging overview of its success and impact."
    },
    {
      id: 2,
      question: "What are Case Study Videos?",
      answer:
        "This video is about getting deeper into a specific project or problem that highlights challenges, solutions, and results to demonstrate your expertise and success."
    },
    {
      id: 3,
      question: "What are Progress Report Videos?",
      answer:
        "A progress report video updates ongoing projects and informs stakeholders about the current status, milestones reached, and what will be done next, keeping them informed and engaged."
    },
    {
      id: 4,
      question: "What are Testimonial Videos?",
      answer:
        "This video tells about satisfied clients or customers sharing their good and positive experiences with you, building trust for your brand or service in the audience."
    },
    {
      id: 5,
      question: "What are Event Recap Videos?",
      answer:
        "An event recap video captures the best moments of an event, provides insights into the event, shows key highlights and memorable interactions, and leaves a lasting impression on viewers."
    }
  ];

  return (
    <div className="fm-services-area section-spacing">
      <div className="container wow fadeInUp" data-wow-delay="0.3s">
        <div className="row section-title-spacing">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="section-main-title featured-sec-title featured-clr title-anim faq-sec-title">
                Our INfluencer Marketing Services
              </h2>
            </div>
          </div>
        </div>
        <div className="fade_animation">
          <div className="row g-5">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="col-lg-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="fm-services-item fade__anim-item">
                  <div className="fm-services-content">
                    <h4 className="fm-services-title">
                      {faq.question}
                    </h4>
                    <p className="fm-services-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaService;
