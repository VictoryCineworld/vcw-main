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
          <div className="col-xxl-12"><StepArea /></div>
        </div>
      </div>
    </section>
  );
};

export default SocialServiceDetails;
