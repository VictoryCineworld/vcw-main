import Link from "next/link";
import React from "react";

const serviceData = [
  {
    id: 1,
    image: "/images/service1.png",
    title: "Corporate & Brand Films",
    description:
      "Whether it is a product launch, a sales pitch video, a demo video, a “How To” video, expos, tradeshows, seminars, or conferences; Motion Edits is a one stop video post-production company assisting industries with all types of marketing campaigns matching up your brand style.",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 2,
    image: "/images/service2.png",
    title: "Music Videos",
    description:
      "Take advantage of high quality music video editing services with Motion Edits Company. Our creative team comprises of top music editors who expertise in editing music albums, concerts, band, DJs, hip hop fests, and rock events performances. Are you an artist looking to add special effects?",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
  {
    id: 3,
    image: "/images/service3.png",
    title: "DOCUMENTARY FILM EDITING",
    description:
      "From documentary style editing for short and long Interviews, Testimonials, Biographies, and more, we have done it all. Whether it is a documentary project with a social message, Are you a doc-style commercial cinematographer?",
    serviceBtn: "Learn More",
    delay: "0.4s",
  },
  {
    id: 4,
    image: "/images/service1.png",
    title: "Video Color Grading Services",
    description:
      "Get professional color grading & color correction services for all types of videos. Our specialized team of Colorists assist Filmmakers transform their raw footage into cinematic quality videos with creative adjustments.",
    serviceBtn: "Learn More",
    delay: "0.2s",
  },
  {
    id: 5,
    image: "/images/service2.png",
    title: "EDUCATION & TRAINING VIDEO EDITING",
    description:
      "Motion Edits Company tops the list when it comes to specialization in Educational Video Editing Service. Be it a vocational e-learning tutorial, online courses offered by schools, universities, colleges, or a corporate HR department looking for training videos for its employees.",
    serviceBtn: "Learn More",
    delay: "0.3s",
  },
  {
    id: 6,
    image: "/images/service3.png",
    title: "YouTube Video Editing",
    description:
      "Get monthly subscription support to edit your YouTube channel videos, intros & outros as per your set deadlines & milestone. Our experienced YouTube editors shall assist you with a quick turnaround, editing as per your style and audience. We use DaVinci Resolve for grading footage. Are you a YouTuber looking to increase your subscribers?",
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
              <span className="section-subtitle title-anim">
                {" "}
                Video Editing Agency In India
              </span>
              <div>
                <h2 className="section-main-title title-anim">
                  Leading Video Editing Service{" "}
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
