import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeTwoBg from "@assets/img/bg/home-2-bg.png";
import HomeTwoBgTwo from "@assets/img/bg/home-2-bg-2.png";
import awardLogo from "@assets/img/new-award-logo/award-2.png";

const HeroTwo = () => {
  return (
    <>
      <div className="adjust-header-space bg-common-black"></div>
      <section className="fm-hero-area-2 fm-home-style-2 bg-common-black fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="fm-hero-wrapper p-relative">
                <div className="fm-hero-thumb-2">
                  <Image
                    src={HomeTwoBg}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="fm-hero-title-wrapper">
                  <h1 className="fm-sec-title text-white">
                    <span className="sec-title-3 sec-title-left">
                      TELLING THE
                    </span>
                    <span className="sec-title-3 story">BIGGER STORY</span>
                  </h1>
                </div>
                <div className="fm-award-thumb d-none d-xl-block">
                  <Image
                    src={awardLogo}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="fm-hero-content">
                  <p className="fm-hero-text animate_content large">
                    Faime Production Is A Full—Service Production House Based
                    Out Of Indonesia And Singapore That Hosts A Thriving Roster
                    Of Directors Working Across A Range Of Artistic Disciplines.
                  </p>

                  <div className="fm-btn mt-35">
                    <Link href="/contact" className="border-btn is-white">
                      Explore Now
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="d-none d-sm-none d-md-block">
                  <div className="fm-hero-thumb-3">
                    <Image
                      src={HomeTwoBgTwo}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </div>
                </div>
                <div className="d-none d-xxl-block">
                  <div className="fm-sidebar-2">
                    <div className="fm-sliderfull-social">
                      <label className="label-bg">Follow</label>
                      <Link href="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link href="https://twitter.com/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link href="https://www.pinterest.com/">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTwo;
