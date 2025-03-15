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
              Innovate, Automate, Elevate With The Best AI ML Development
              Services:
            </h4>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              At Victorycineworld, we help businesses unlock the full potential
              of their data through AI-powered insights. Our expert AI and ML
              solutions drive smarter decisions, improve operational efficiency,
              and enhance customer experience. So, partner with our machine
              learning solutions company to transform your data into valuable
              insights that fuel growth and success. Call us today at (+91) 855
              484 5111.
            </p>

            <StepArea />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialServiceDetails;
