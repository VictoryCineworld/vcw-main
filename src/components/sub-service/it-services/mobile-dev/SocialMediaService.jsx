import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceData = [
  {
    id: 1,
    image: "/images/service1.png",
    title: "Mobile App Development",
    description: "We create high-quality mobile applications for Android and iOS.",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 2,
    image: "/images/service2.png",
    title: "iOS App Development",
    description: "Build seamless and secure iOS applications for Apple devices.",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
  {
    id: 3,
    image: "/images/service3.png",
    title: "Android App Development",
    description: "Develop user-friendly Android apps with high performance.",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 4,
    image: "/images/service4.png",
    title: "Cross-Platform Development",
    description: "Build apps that run smoothly on both iOS and Android platforms.",
    serviceBtn: "Learn More",
    delay: "0.5s",
  },
  {
    id: 5,
    image: "/images/service5.png",
    title: "UI/UX Design for Mobile Apps",
    description: "Create visually appealing and user-friendly mobile app interfaces.",
    serviceBtn: "Learn More",
    delay: "0.6s",
  },
  {
    id: 6,
    image: "/images/service6.png",
    title: "App Maintenance & Support",
    description: "Ensure your mobile app remains updated and runs smoothly.",
    serviceBtn: "Learn More",
    delay: "0.7s",
  },
];

const SocialMediaService = () => {
  return (
    <section className="fm-services-area section-spacing">
      <div className="container">
        <div className="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-xl-6">
            <div className="section-title text-center">
              <span className="section-subtitle title-anim">WHAT WE DO</span>
              <div>
                <h2 className="section-main-title title-anim">
                  Our Mobile Development Expertise
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="fade_animation">
          <div className="row g-5">
            {serviceData.map((item) => (
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
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
