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
              Why VictoryCineworld .?{" "}
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              We provide quality copywriting services to our clients. We provide
              dedicated writers and editors who stay engaged with the task given
              by a client till the completion of the project. As a premium
              copywriting company, we deliver the best website copies with
              prompt delivery and a transparent billing facility.
            </p>
         

            <StepArea />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialServiceDetails;
