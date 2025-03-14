import Link from "next/link";
import React from "react";

const serviceData = [
  {
    id: 1,
    image: "/images/service1.png",
    title: "Company Overview/“About” Videos",
    description:
      "Introduce yourself! Help potential clients put a face to your business’ name while learning a little about you in the process . ",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 2,
    image: "/images/service2.png",
    title: "Product Videos",
    description:
      "People like to try before they buy. Show site visitors your products in action so they can picture how they’d fit into their own lives. ",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
  {
    id: 3,
    image: "/images/service3.png",
    title: "Interview Videos",
    description:
      "Whether you choose to feature interviews with team members or customers/clients, we’ll craft questions that get at the heart of why you do what you do. ",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 4,
    image: "/images/service3.png",
    title: "Animated Explainer Videos",
    description:
      "Many people prefer to digest information via video rather than reading. Make it easy on your site visitors by providing animated video explanations of products or services.",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 5,
    image: "/images/service3.png",
    title: "How-to Videos",
    description:
      "Help your clients and site visitors understand your product or service without having to call the helpline.We’ll help you craft compelling promotional videos for new products or upcoming events. ",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 6,
    image: "/images/service3.png",
    title: "Advertisements & Fundraising Campaigns",
    description:
      "Got a cause to crow about? Utilize video to grab site visitors’ attention and tell them about your mission.",
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
              <span className="section-subtitle title-anim">HOW IT WORKS</span>
              <div>
                <h2 className="section-main-title title-anim">
                  Types of Marketing Videos We Offer{" "}
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
