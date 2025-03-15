import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaService = () => {
  const serviceData = [
    {
      id: 1,
      title: "Social Media Strategy",
      description: "We develop a customized social media strategy that aligns with your business goals and target audience.",
      serviceBtn: "Learn More",
      delay: "0.3s",
    },
    {
      id: 2,
      title: "Content Creation & Scheduling",
      description: "We create and schedule engaging content, including text, images, and videos, for your social media platforms.",
      serviceBtn: "Discover More",
      delay: "0.5s",
    },
    {
      id: 3,
      title: "Community Management",
      description: "We monitor and respond to comments, messages, and mentions, building relationships with your followers.",
      serviceBtn: "Explore More",
      delay: "0.7s",
    },
    {
      id: 4,
      title: "Social Media Advertising",
      description: "We run targeted ad campaigns on social media platforms like Facebook, Instagram, and Twitter to reach a wider audience.",
      serviceBtn: "See Details",
      delay: "0.9s",
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "We track your social media performance and provide regular reports on key metrics, such as reach, engagement, and conversions.",
      serviceBtn: "Find Out More",
      delay: "1.1s",
    },
    {
      id: 6,
      title: "Influencer Marketing",
      description: "We identify and collaborate with relevant influencers to promote your brand and reach a wider audience.",
      serviceBtn: "Learn More",
      delay: "1.3s",
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
