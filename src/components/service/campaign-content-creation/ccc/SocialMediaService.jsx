import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceData = [
  {
    id: 1,
    image: "/images/service1.png",
    title: "Social Media Posts",
    description:
      "Creating engaging posts for platforms like Facebook, Instagram, Twitter, and LinkedIn helps businesses connect with their audience.",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 3,
    image: "/images/service3.png",
    title: "Promotional Videos",
    description:
      "A well-made promotional video can significantly enhance brand awareness and drive conversions​ (SpiderWorks)​.",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 2,
    image: "/images/service2.png",
    title: "Stories and Reels",
    description:
      "Stories and Reels offer a more casual and authentic way to connect with your audience, often leading to higher engagement rates.",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
 
  {
    id: 4,
    image: "/images/service1.png",
    title: "Tutorials and How-To Videos",
    description:
      "These videos provide step-by-step instructions on using a product or service, offering value to the audience and establishing the brand as an authority in its field. ",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 5,
    image: "/images/service2.png",
    title: " Blog Posts",
    description:
      "Blog posts are a versatile content format that can cover a wide range of topics, from industry news and trends to how-to guides and product updates. ",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
  {
    id: 6,
    image: "/images/service3.png",
    title: "Articles and Research Papers",
    description:
      "In-depth articles and research papers provide detailed insights into specific topics, showcasing your expertise and establishing your brand as a thought leader.",
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
