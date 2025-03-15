import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceData = [
  {
    title: "AI/ML Consulting",
    description: "We provide expert consulting services to help you identify and implement AI/ML solutions that align with your business goals.",
    serviceNum: "1"
},
{
    title: "Custom AI/ML Model Development",
    description: "We develop custom AI/ML models for a wide range of applications, including image recognition, natural language processing, and predictive analytics.",
    serviceNum: "2"
},
{
    title: "AI/ML Integration",
    description: "We integrate AI/ML solutions into your existing systems and applications.",
    serviceNum: "3"
},
{
    title: "AI/ML-Powered Applications",
    description: "We develop AI/ML-powered applications, such as chatbots, recommendation engines, and predictive maintenance systems.",
    serviceNum: "4"
},
{
    title: "Data Science & Analytics",
    description: "We leverage data science and analytics techniques to extract valuable insights from your data and make informed business decisions.",
    serviceNum: "5"
}
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
