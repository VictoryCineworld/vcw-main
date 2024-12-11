import Image from "next/image";
import React from "react";
import aboutImage from "@assets/img/about/director-about.png";
import Link from "next/link";
import Marquee from "react-fast-marquee";  // Importing fast-marquee

const AboutSection = () => {
  return (
    <div className="fm-about-area bg-common-black section-spacing fix">
      <div className="container">
        <div className="row align-items-center g-5 gy-50">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
            <div className="fm-director-about-img">
              <Image
                src={aboutImage}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
              <div className="fm-director-years">
                <span className="fm-director-years-number">10</span>
                <span className="fm-director-years-content">
                  <span className="fm-director-plus">+</span>
                  <span className="fm-director-years-text">
                    Years <br /> Experience
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <div className="fm-about-content-section">
              <span className="section-subtitle title-anim">ABOUT US</span>
              <h2 className="section-main-title text-white mb-25 title-anim">
                Elevating Brands Frame By Frame
              </h2>
              <p className="mb-20">
                {`I’m`} Our enthusiasm has led us to become a top Video
                Production & Media Company in India for delivering various
                industry-led solutions in film making and video production
                domains leveraging state-of-the-art technology, innovative
                techniques.
              </p>

              <p>
                Our seasoned team, with experience collaborating with
                prestigious production houses in both Bollywood and Hollywood,
                guarantees global standards in every project we undertake. Ready
                to Rule?
              </p>
              <p>
                While rooted in a legacy of innovation and hard-core film
                making, Victory Cineworld offers a nimble, boutique approach
                that caters to the unique needs of each project. Our team of
                creative visionaries and technical experts collaborate
                seamlessly to design tailored solutions that push the limits of
                visual storytelling.
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
        <div className="mt-5 ">
          <Marquee speed={50} direction="left" className="logo-marquee space-x-16">
            {/* Example logos, you can replace these with actual logo images */}
            <Image src="/path/to/logo1.png" alt="Logo 1" width={150} height={50} />
            <Image src="/path/to/logo2.png" alt="Logo 2" width={150} height={50} />
            <Image src="/path/to/logo3.png" alt="Logo 3" width={150} height={50} />
            <Image src="/path/to/logo4.png" alt="Logo 4" width={150} height={50} />
            <Image src="/path/to/logo5.png" alt="Logo 5" width={150} height={50} />
            <Image src="/path/to/logo6.png" alt="Logo 6" width={150} height={50} />
            <Image src="/path/to/logo7.png" alt="Logo 7" width={150} height={50} />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
