import FaqSection from "@components/portfolo-details-page/faq-section";
import React from "react";
import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import BlogQuote from "@svg/blog-quote";
import StepAreaSection from "@components/service-details/step-area-section";
import SocialSlider from "./SocialSlider";
import StepArea from "./StepArea";
import SocialFaqs from "./SocialFaqs";

const SocialServiceDetails = () => {
  return (
    <section className="case-details-area">
      <div className="container">
        {/* <div className="row">
          <ServiceMiddle />
        </div> */}
      </div>
      <SocialSlider />
      <div
        className="container section-spacing-bottom wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="row">
          <div className="col-xxl-12">
            <h4 className="case-subtitle mb-25">
              <span>
                <CaseSubtitleIcon />
              </span>
              Victorycineworld: Building Future-Proof Apps for a Mobile World
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Mobile app answers that deliver value to clients and elevate your
              brand. Mobile app improvement services seek advice from the
              creation of software program packages to run on mobile devices,
              together with smartphones and tablets. The system of growing those
              apps usually includes developing a user interface and design,
              coding the common sense of the app, trying out the app, then
              making it available for download through an App Store or Google
              Play. So, whether you are looking for native mobile app
              development services or iOS mobile app development services, we
              are just a phone call away.
            </p>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Visit Victorycineworld for more information about our ios and
              android app development services!
            </p>

            <StepArea />
            {/* <SocialFaqs /> */}
            {/* <GallarySection /> */}

            {/* <BlogQuote /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialServiceDetails;
