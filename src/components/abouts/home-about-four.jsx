import React from "react";
import AboutImgOne from "@assets/img/about/home-5/img-1.jpg";
import AboutImgTwo from "@assets/img/about/home-5/img-2.jpg";
import AboutImgThere from "@assets/img/about/home-5/img-3.jpg";
import Image from "next/image";
import Link from "next/link";

const HomeAboutFour = () => {
  return (
    <div className="about-area section-spacing-top fix-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="fm-about-thumb-wrapper-3 wow fmSlideInLeft" data-wow-delay="0.4s">
              <div className="fm-about-thumb-3">
                <Image
                  src={AboutImgOne}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="fm-about-thumb-3">
                <Image
                  src={AboutImgTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="fm-about-thumb-3">
                <Image
                  src={AboutImgThere}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-2-wrapper wow fmSlideInRight" data-wow-delay="0.4s">
              <div className="section-title sec-sub-style mb-30">
                <span className="section-subtitle">ABOUT ME</span>
                <h2 className="section-main-title about-sec-title-2 title-anim ">
                  The Most Poplar Actor In
                  <span>USA</span>
                </h2>
              </div>
              <div className="fm-about-content-2">
                <p>
                  Faime Production Is A Full—Service Production House Based Out
                  Of Indonesia And Singapore That Hosts A Thriving Roster Of
                  Directors{" "}
                </p>
                <p>
                  We Believe Film And Moving Image Has The Power To Create
                  Significant Change. We Help Brands Realise That Power And
                  Agencies To Bri Ng Their Creative Vision To Fruition.
                </p>
                <Link href="/contact" className="fill-btn fade_bottom">
                  Hire Me
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutFour;
