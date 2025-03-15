import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaService = () => {
  const serviceData = [
    {
      id: 1,
      title: "Company Culture Videos",
      description: "We capture the essence of your company culture and values through engaging and inspiring videos.",
      image: "/images/service1.jpg",
      delay: "0.3s",
      serviceBtn: "Learn More",
    },
    {
      id: 2,
      title: "Product Launch Videos",
      description: "We create dynamic and informative videos to launch new products and generate excitement.",
      image: "/images/service2.jpg",
      delay: "0.5s",
      serviceBtn: "Discover More",
    },
    {
      id: 3,
      title: "Testimonial Videos",
      description: "We showcase customer testimonials to build trust and credibility with potential clients.",
      image: "/images/service3.jpg",
      delay: "0.7s",
      serviceBtn: "Explore More",
    },
    {
      id: 4,
      title: "Explainer Videos",
      description: "We create concise and engaging videos that explain your products or services in a clear and concise manner.",
      image: "/images/service4.jpg",
      delay: "0.9s",
      serviceBtn: "See Details",
    },
    {
      id: 5,
      title: "Event Videos",
      description: "We capture the highlights of your company events, including conferences, trade shows, and team-building activities.",
      image: "/images/service5.jpg",
      delay: "1.1s",
      serviceBtn: "Find Out More",
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
        <div className=" fade_animation">
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
