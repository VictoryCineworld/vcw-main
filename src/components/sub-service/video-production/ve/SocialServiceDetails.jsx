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
            <h4 className="case-subtitle mb-25">
              <span>
                <CaseSubtitleIcon />
              </span>
              Hire a Dedicated Online Video Editor{" "}
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Hire your own video editor who will work exclusively for you and
              edit videos as per your needs and requirements. The turnaround
              time, both in terms of original delivery and iterations, is
              quicker since the video editor is devoting the prefixed number of
              hours dedicated to your project. Pay the editor on an hourly or
              monthly basis and avail his services to make your videos look more
              captivating.
            </p>

            <StepArea />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialServiceDetails;
