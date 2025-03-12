import React from "react";
import AboutBg from "@assets/img/bg/about-bg.jpg";
import Image from "next/image";

const AboutArea = () => {
  return (
    <section className="about-area section-spacing fix">
      <div className="container">
        <div className="row g-5 section-title-spacing">
          <div
            className="col-xl-6 col-lg-4 wow fmSlideInLeft"
            data-wow-delay="0.3s"
          >
            <div className="about-sub">
              <span className="section-subtitle title-anim mb-0">
                Our Process
              </span>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-8 wow fmSlideInRight"
            data-wow-delay="0.3s"
          >
            <div className="section-title">
              <h2 className="section-main-title about-main-title title-anim">
                On-Demand Video <br />
                Production Company
              </h2>
              <p className="mb-5">
                Our work flow is collaborative and transparent, ensuring every
                step of your journey with us is smooth and result oriented. We
                are your creative partners. We build strong relationships with
                all our clients, understand their unique needs, and deliver
                exceptional results that exceed expectations. Our Process is a
                seamless journey of delivering results. Here&apos;s a glimpse into
                how we work:
              </p>
              <div className="section-text about-text">
                {/* <p>
                  Victory Cineworld Is A Full—Service Production House Based Out
                  Indonesia And Singapore That Hosts A Thriving Roster Of
                  Directors Working Across A Range Of Artistic Disciplines.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="about-thumb-wrapper wow fadeInUp" data-wow-delay="0.4s">
          <div className="about-exp">
            <h4 className="about-exp-num">10</h4>
            <p className="about-exp-text small text-white">
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>
          <div className="about-thumb">
            <Image
              src={AboutBg}
              style={{ width: "100%", height: "auto" }}
              alt="img not found"
              data-speed="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
