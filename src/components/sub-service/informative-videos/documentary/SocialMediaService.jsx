import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaService = () => {
  const serviceData = [
    {
      id: 1,
      title: "Social Media Management",
      description: "We provide top-notch social media management services to grow your brand.",
      image: "/images/service1.jpg",
      delay: "0.3s",
      serviceBtn: "Learn More",
    },
    {
      id: 2,
      title: "Content Creation",
      description: "Our team creates high-quality content tailored to your audience.",
      image: "/images/service2.jpg",
      delay: "0.5s",
      serviceBtn: "Discover More",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Boost your online visibility and ranking with our SEO services.",
      image: "/images/service3.jpg",
      delay: "0.7s",
      serviceBtn: "Explore More",
    },
    {
      id: 4,
      title: "Paid Advertising",
      description: "Targeted ads to maximize your ROI and expand your reach.",
      image: "/images/service4.jpg",
      delay: "0.9s",
      serviceBtn: "See Details",
    },
    {
      id: 5,
      title: "Influencer Marketing",
      description: "Leverage influencers to promote your brand and increase awareness.",
      image: "/images/service5.jpg",
      delay: "1.1s",
      serviceBtn: "Find Out More",
    },
    {
      id: 6,
      title: "Community Engagement",
      description: "Building and maintaining strong relationships with your community.",
      image: "/images/service6.jpg",
      delay: "1.3s",
      serviceBtn: "Read More",
    },
    {
      id: 7,
      title: "Brand Strategy",
      description: "Strategic brand development to ensure long-term success.",
      image: "/images/service7.jpg",
      delay: "1.5s",
      serviceBtn: "Get Started",
    },
    {
      id: 8,
      title: "Social Media Analytics",
      description: "Track, analyze, and optimize your social media performance.",
      image: "/images/service8.jpg",
      delay: "1.7s",
      serviceBtn: "View Insights",
    },
    {
      id: 9,
      title: "Custom Web Design",
      description: "We create stunning websites that are both functional and aesthetically pleasing.",
      image: "/images/service9.jpg",
      delay: "1.9s",
      serviceBtn: "View Portfolio",
    },
    {
      id: 10,
      title: "Video Production",
      description: "Professional video production services to captivate your audience.",
      image: "/images/service10.jpg",
      delay: "2.1s",
      serviceBtn: "See Our Work",
    },
    {
      id: 11,
      title: "Email Marketing",
      description: "Effective email campaigns to reach and engage your audience.",
      image: "/images/service11.jpg",
      delay: "2.3s",
      serviceBtn: "Start Campaign",
    },
    {
      id: 12,
      title: "App Development",
      description: "Custom app development tailored to your business needs.",
      image: "/images/service12.jpg",
      delay: "2.5s",
      serviceBtn: "Learn More",
    },
    {
      id: 13,
      title: "Graphic Design",
      description: "Design services to create visually impactful assets for your brand.",
      image: "/images/service13.jpg",
      delay: "2.7s",
      serviceBtn: "Explore Designs",
    },
    {
      id: 14,
      title: "E-commerce Solutions",
      description: "Complete e-commerce solutions to help grow your online store.",
      image: "/images/service14.jpg",
      delay: "2.9s",
      serviceBtn: "Check Solutions",
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
        <div className=" fade_animation">
          <div className="row g-5">
            {serviceData.slice(8, 14).map((item) => (
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
