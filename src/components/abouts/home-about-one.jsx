import Image from "next/image";
import React from "react";
import aboutImage from "@assets/img/about/2.png";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      {" "}
      <div className="fm-about-area bg-common-black section-spacing fix">
        <div className="container">
          <div className="row align-items-center g-5 gy-50">
            <div
              className="col-xl-6 col-lg-6 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <div className="fm-director-about-img">
                <Image
                  src={aboutImage}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
                <div className="fm-director-years">
                  <span className="fm-director-years-number">20</span>
                  <span className="fm-director-years-content">
                    <span className="fm-director-plus">+</span>
                    <span className="fm-director-years-text">
                      Years <br /> Experience
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="fm-about-content-section">
                <span className="section-subtitle title-anim">OUR STORY</span>
                <h2 className="section-main-title text-white mb-25 title-anim pt-4 fw-light">
                  Elevating Brands One Frame at a Time
                </h2>
                <p className="mb-20">
                  Most business relationships either become too tense to
                  tolerate or not tense enough to be productive after a while.
                </p>
                <p className="mb-20">
                  Either partners challenge each other to the point where they
                  don&apos;t like each other or they become complacent about
                  each other&apos;s feedback and no longer benefit from each
                  other.
                </p>

                <p className="mb-20">
                  With Gaurav &amp; Gunjan, they engage in daily, often intense,
                  debates. They challenge each other on every minor detail,
                  voicing every &quot;darddd&quot; – every small business
                  frustration – with unfiltered honesty. They constantly
                  question each other&apos;s assumptions and strive to find
                  flaws in each other&apos;s thinking. This unconventional
                  approach has proven remarkably effective and it works. It just
                  works!
                </p>
                <div className="fm-director-about-name mt-55">
                  <Link href="/team-details" className="director-about-nam">
                    Victory Cineworld
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee for logos */}
          {/* <div className="mt-5 me-15 pt-5">
        <Marquee speed={50} direction="left" className="logo-marquee d-flex" style={{ gap: "10px" }}>
  {Array.from({ length: 9 }, (_, i) => (
    <Image
      key={i}
      src={`/assets/img/logo/clients/vcw-logo (${i + 1}).png`}
      alt={`Logo ${i + 1}`}
      width={300}
      height={250}
      className="img-fluid"
      style={{ maxHeight: "150px", objectFit: "contain" }}
    />
  ))}
</Marquee>

        </div> */}
        </div>
      </div>
     
    </>
  );
};

export default AboutSection;
