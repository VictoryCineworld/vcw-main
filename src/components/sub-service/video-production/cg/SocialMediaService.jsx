import Link from "next/link";
import React from "react";

const serviceData = [
  {
    id: 1,
    image: "/images/service1.png",
    title: "Digital Intermediate",
    description:
      "Digital Intermediate or DI is a process through which the colors of the film are enhanced to give it a rich and more aesthetically appropriate look.",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 2,
    image: "/images/service2.png",
    title: "Film Colorization",
    description:
      "A unique and rare service offered for colorizing black and white movies using in-depth research and best-in-class techniques.",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
  {
    id: 3,
    image: "/images/service3.png",
    title: "Dubbing",
    description:
      "Ultra is one of the best dubbing studios for Indian languages with a vast database of artists to cater to the needs of every individual client.",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 4,
    image: "/images/service3.png",
    title: "Rotoscoping & Paint",
    description:
      "Studios proficient in V.F.X. believe in us for these services. Do you?",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 5,
    image: "/images/service3.png",
    title: "Editing",
    description:
      "They say that a movie is made at the edit table. You can't afford to go wrong during this critical process.",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 6,
    image: "/images/service3.png",
    title: "Film Restoration",
    description:
      " The digital restoration process that we offer at Ultra includes manual frame-by-frame restoration using world-class technology.",
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
              <span className="section-subtitle title-anim">OUR SERVICES</span>
              <div>
                <h2 className="section-main-title title-anim">
                  Color Grading (DI){" "}
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
