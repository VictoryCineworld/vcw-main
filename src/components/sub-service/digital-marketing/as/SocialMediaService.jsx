import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaService = () => {
  const serviceData = [
    {
      id: 1,
      title: "Keyword Research",
      description: "We identify relevant keywords and phrases that users are likely to use when searching for apps like yours.",
      serviceNum: "1",
      delay: "0.3s",
      serviceBtn: "Learn More",
    },
    {
      id: 2,
      title: "App Store Optimization",
      description: "We optimize your app's title, description, keywords, and screenshots to improve your app's ranking in search results.",
      serviceNum: "2",
      delay: "0.5s",
      serviceBtn: "Discover More",
    },
    {
      id: 3,
      title: "App Store Page Design",
      description: "We create visually appealing and informative app store pages that encourage users to download your app.",
      serviceNum: "3",
      delay: "0.7s",
      serviceBtn: "Explore More",
    },
    {
      id: 4,
      title: "Competitive Analysis",
      description: "We analyze your competitors' ASO strategies to identify opportunities and gain a competitive edge.",
      serviceNum: "4",
      delay: "0.9s",
      serviceBtn: "See Details",
    },
    {
      id: 5,
      title: "App Store Optimization",
      description: "We monitor your app's performance and make ongoing adjustments to your ASO strategy to improve your app's ranking and visibility.",
      serviceNum: "5",
      delay: "1.1s",
      serviceBtn: "Find Out More",
    }
  ];

  return (
    <section className="fm-services-area section-spacing">
      <div className="container">
        <div className="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-xl-6">
            <div className="section-title text-center">
              <span className="section-subtitle title-anim">WHAT WE DO</span>
              <div>
                <h2 className="section-main-title title-anim">
                  Our Best Expertise
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
