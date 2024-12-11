import FaqSection from "@components/portfolo-details-page/faq-section";
import GallarySection from "@components/portfolo-details-page/gallary";
import React from "react";
import StepAreaSection from "@components/service-details/step-area-section";
import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";
import ServiceMiddle from "@components/service-details/service-middle";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import { Header } from "@layout/index";
import DMFAQs from "./DMFAQs";
import FooterOne from "@layout/footers/footer-one";

const DigitalMarketing = () => {
  return (
    <>
    <Header/>
    <section className="case-details-area">
      <div className="container">
        <div className="row">
          <ServiceMiddle />
        </div>
      </div>
      <PortfolioSliderTwo />
      <div className="container section-spacing-bottom wow fadeInUp" data-wow-delay="0.3s">
        <div className="row">
          <div className="col-xxl-12">
            <h4 className="case-subtitle mb-25">
              <span>
                <CaseSubtitleIcon />
              </span>
              Objective
            </h4>
            <p className="mb-55 ">
              One of the largest food retailers needed to automate inspection
              and maintenance processes in their stores and update their
              troubleshooting reports. Retail companies have notoriously complex
              requirements when it comes to ongoing maintenance, and manual
              inspections can limit the ability to report and verify current
              conditions. The choice of font and font size with which Lorem
              ipsum is reproduced answers to specific needs that go beyond the
              simple and simple filling of spaces dedicated to accepting real
              texts and allowing to have hands an advertising/publishing
              product, both web and paper, true to reality.
            </p>
            <p className="">
              {" "}
              One of the main objectives for the new site was to attract new
              business and leave a memorable impression on (often busy) brand
              representatives and ad agencies. Secondary objective was to
              present Ali’s story in an immersive way in order to connect with
              his audience and express his love for storytelling and typography.
            </p>

            <StepAreaSection />
            <DMFAQs />
            <GallarySection />

            <div className="text-latout">
              <p className="mb-55 ">
                One of the largest food retailers needed to automate inspection
                and maintenance processes in their stores and update their
                troubleshooting reports. Retail companies have notoriously
                complex requirements when it comes to ongoing maintenance, and
                manual inspections can limit the ability to report and verify
                current conditions. The choice of font and font size with which
                Lorem ipsum is reproduced answers to specific needs that go
                beyond the simple and simple filling of spaces dedicated to
                accepting real texts and allowing to have hands an
                advertising/publishing product, both web and paper, true to
                reality.
              </p>
              <p className="">
                One of the main objectives for the new site was to attract new
                business and leave a memorable impression on (often busy) brand
                representatives and ad agencies. Secondary objective was to
                present Ali’s story in an immersive way in order to connect with
                his audience and express his love for storytelling and
                typography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterOne/>
    </>
  );
};

export default DigitalMarketing;
