import React from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import SocialSlider from "./SocialSlider";
import StepArea from "./StepArea";

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
            <StepArea />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialServiceDetails;
