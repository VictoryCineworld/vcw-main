import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceData = [
  {
    id: 1,
    image: "/images/service1.png",
    title: "Scripts That Resonate",
    description:
      "We create narratives that captivate and engage your audience.",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 2,
    image: "/images/service2.png",
    title: "Expertise Across Genres",
    description: "From corporate videos to online content, we know what works.",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
  {
    id: 3,
    image: "/images/service3.png",
    title: "Audience-First Approach",
    description: "Write scripts designed to connect deeply with your viewers.",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 4,
    image: "/images/service1.png",
    title: "Proven Frameworks",
    description:
      "Tried-and-tested techniques to ensure your story drives impact.",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 5,
    image: "/images/service2.png",
    title: "Expertise Across Genres",
    description: "Custom, High-Quality Writing with VictoryCineworld.",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
  {
    id: 6,
    image: "/images/service3.png",
    title: "Focus on Results",
    description:
      "Measure success with audience engagement & production outcomes.",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
];

const SocialMediaService = () => {
  return (
    <section className="fm-services-area section-spacing">
      <div className="container">
        <div
          className="row justify-content-center section-title-spacing wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="col-xl-6">
            <div className="section-title text-center">
              <span className="section-subtitle title-anim">HOW WE WORKS</span>
              <div>
                <h2 className="section-main-title title-anim">
                  Why Us for Script Writing?{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="fade_animation">
          <div className="row g-5">
            {serviceData.map((item) => (
              <div
                className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item.id}
              >
                <div className="fm-services-item fade__anim-item">
                  <div className="fm-services-icon">
                    {/* <Image
                      src={item.image}
                      style={{ width: 'auto', height: 'auto' }}
                      alt="img not found"
                    /> */}
                  </div>
                  <div className="fm-services-content">
                    <h4 className="fm-services-title">
                      <Link href={`/service-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <p className="fm-services-text">{item.description}</p>
                    <div className="fm-btn services-btn">
                      <Link
                        href={`/service-details/${item.id}`}
                        className="fm-view-more"
                      >
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
