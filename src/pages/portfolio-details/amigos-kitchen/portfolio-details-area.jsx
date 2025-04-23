import React from "react";
import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";

import MiddleSection from "./middle-section";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";

const PortfolioDetailsArea = ({ item }) => {
  return (
    <section className="case-details-area">
      <div className="container">
        <div className="row">
          <MiddleSection item={item} />
        </div>
      </div>
      <PortfolioSliderTwo />
      <div
        className="container section-spacing-bottom wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="row">
          <div className="col-xxl-12 ">
            <h4 className="case-subtitle mb-25">
              <span>
                {" "}
                <CaseSubtitleIcon />{" "}
              </span>
              Service Package Delivered
            </h4>
            <p className="mb-35">
              {" "}
              We offered a tailored monthly Instagram package including:
            </p>
            <h5 className="mb-10">Instagram Handling:</h5>
            <p className="pl-30 mb-10">
              - Daily/weekly content planning and publishing.
            </p>
            <p className="pl-30 mb-30">
              - Comments and DMs management to foster engagement.
            </p>
            <p>
              <h5 className="mb-10">Reels Production (8/Month):</h5>
              <p className="pl-30 mb-10">
                - High-quality, aesthetic food and behind-the-scenes reels.
              </p>
              <p className="pl-30 mb-30">
                - Creative storytelling through dining moments, food plating,
                and ambiance.
              </p>

              <h5 className="mb-10">Motion Graphics (4/Month):</h5>
              <p className="pl-30 mb-10">
                - Visually striking festive, offer-based, and promotional
                graphics.
              </p>
              <p className="pl-30 mb-30">
                - Maintained brand color palette and modern layout aesthetics.
              </p>

              <h5 className="mb-10">Product Shoots:</h5>
              <p className="pl-30 mb-10">
                - Captured best-selling dishes, chef plating moments, and
                customer candids.
              </p>
              <p className="pl-30 mb-30">
                - Natural lighting and crisp, appetizing visuals.
              </p>

              <h5 className="mb-10">Post-Production:</h5>
              <p className="pl-30 mb-40">
                - Editing, music licensing, transitions, and reel optimization.
              </p>

              <h5 className="mb-10">Results & Impact :</h5>
              <p className="pl-30 mb-10">
                - Significant growth in Instagram followers and story views.
              </p>
              <p className="pl-30 mb-10">
                - Higher local engagement and user-generated content tagging.
              </p>
              <p className="pl-30 mb-10">
                - Several viral reels resulting in packed weekends.
              </p>
              <p className="pl-30 mb-55">
                - Improved brand recall and recognition across Sambhajinagar.
              </p>
            </p>
            {/* <FaqSection /> */}
            {/* <GallarySection /> */}
            <div className="text-latout">
              <h5>Conclusion & Key Takeaways</h5>
              <p className="mb-55 " style={{ textAlign: "justify" }}>
                Amigose Kitchen stands as a success story for localized digital
                branding. Through eye-catching visuals, relatable storytelling,
                and professional management, Victory Cineworld transformed their
                Instagram from static to standout.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetailsArea;
