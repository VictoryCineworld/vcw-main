import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaService = () => {
  const serviceData = [
    {
      id: 1,
      title: "Keyword Research",
      description: "We identify relevant keywords and phrases that your target audience is searching for.",
      delay: "0.3s",
      serviceBtn: "Learn More",
    },
    {
      id: 2,
      title: "On-Page Optimization",
      description: "We optimize your website's content, including titles, meta descriptions, headings, and images, to improve search engine rankings.",
      delay: "0.5s",
      serviceBtn: "Discover More",
    },
    {
      id: 3,
      title: "Off-Page Optimization",
      description: "We build high-quality backlinks from reputable websites to improve your website's authority and credibility.",
      delay: "0.7s",
      serviceBtn: "Explore More",
    },
    {
      id: 4,
      title: "Technical SEO",
      description: "We ensure your website is technically sound and easily crawlable by search engines.",
      delay: "0.9s",
      serviceBtn: "See Details",
    },
    {
      id: 5,
      title: "Local SEO",
      description: "We optimize your website and online presence for local searches, helping you reach customers in your area.",
      delay: "1.1s",
      serviceBtn: "Find Out More",
    },
    {
      id: 6,
      title: "Competitive Analysis",
      description: "We analyze your competitors' SEO strategies to identify opportunities and gain a competitive edge.",
      delay: "1.3s",
      serviceBtn: "Analyze Now",
    },
    {
      id: 7,
      title: "Reporting & Analytics",
      description: "We track your website's performance and provide regular reports on your SEO progress.",
      delay: "1.5s",
      serviceBtn: "View Reports",
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
