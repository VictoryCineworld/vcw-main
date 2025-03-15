import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaService = () => {
  const serviceData = [
    {
      id: 1,
      title: "Explainer Videos",
      description: "We create concise and engaging videos that explain complex concepts and ideas in a simple and easy-to-understand way.",
      serviceBtn: "Learn More",
      delay: "0.3s",
    },
    {
      id: 2,
      title: "Instructional Videos",
      description: "We create step-by-step tutorials and instructional videos that guide viewers through various processes and tasks.",
      serviceBtn: "Discover More",
      delay: "0.5s",
    },
    {
      id: 3,
      title: "K-12 Educational Videos",
      description: "We create engaging and informative videos for students of all ages, making learning fun and interactive.",
      serviceBtn: "Explore More",
      delay: "0.7s",
    },
    {
      id: 4,
      title: "Corporate Training Videos",
      description: "We create training videos for employees, covering topics such as product knowledge, safety procedures, and customer service.",
      serviceBtn: "See Details",
      delay: "0.9s",
    },
    {
      id: 5,
      title: "E-learning Videos",
      description: "We create interactive and engaging videos for online learning platforms.",
      serviceBtn: "Find Out More",
      delay: "1.1s",
    },
  ];

  return (
    <section className="fm-services-area section-spacing">
      <div className="container">
        <div className="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-xl-6">
            <div className="section-title text-center">
              <span className="section-subtitle title-anim">WHAT WE DO</span>
              <div>
                <h2 className="section-main-title title-anim">Our Best Expertise</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="fade_animation">
          <div className="row g-5">
            {serviceData.map((item) => (
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                <div className="fm-services-item fade__anim-item">
                  <div className="fm-services-content">
                    <h4 className="fm-services-title">
                      <Link href={`/service-details/${item.id}`}>{item.title}</Link>
                    </h4>
                    <p className="fm-services-text">{item.description}</p>
                    <div className="fm-btn services-btn">
                      <Link href={`/service-details/${item.id}`} className="fm-view-more">
                        {item.serviceBtn}
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaService;