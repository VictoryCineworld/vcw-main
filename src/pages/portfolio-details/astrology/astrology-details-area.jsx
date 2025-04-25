import React from "react";
// import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";

import MiddleSection from "./middle-section";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";

const AstrologyPortfolioDetailsArea = ({ item }) => {
  return (
    <section className="case-details-area">
      <div className="container">
        <div className="row">
          <MiddleSection item={item} />
        </div>
      </div>
      {/* <PortfolioSliderTwo /> */}
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
              Project Scope
            </h4>
            <p className="mb-35">
              {" "}
              Victory Cineworld provided complete end-to-end video production
              services tailored for YouTube:
            </p>
            <h5 className="mb-10">Green Screen Chroma Shoot</h5>
            <p className="pl-30 mb-10">
              - Setup and execution of professional chroma shoot with Astrologer
              Ashok Pagaria.
            </p>
            <p className="pl-30 mb-30">
              - Ensured ease and comfort for the senior client during the entire
              shoot.
            </p>
            <p>
              <h5 className="mb-10">Content Direction & Visual Aesthetics:</h5>
              <p className="pl-30 mb-10">
                - Developed video concepts that were educational, insightful,
                and aligned with his brand.
              </p>
              <p className="pl-30 mb-30">
                - Used traditional Indian visual cues while giving a modern
                video aesthetic.
              </p>

              <h5 className="mb-10">Post-Production Excellence :</h5>
              <p className="pl-30 mb-10">
                - Replaced green screen with custom-designed digital backdrops
                relevant to astrology.
              </p>
              <p className="pl-30 mb-10">
                Added thematic background music and visual elements to keep the
                videos engaging.
              </p>
              <p className="pl-30 mb-30">
                - Clean editing, lower-thirds for key points, subtitles, and
                dynamic transitions.
              </p>

              <h5 className="mb-10">YouTube Delivery Format:</h5>
              <p className="pl-30 mb-10">
                - Final videos optimized for YouTube in HD quality.
              </p>
              <p className="pl-30 mb-30">
                - Thumbnail design and title strategy support provided.
              </p>

              <h5 className="mb-10">Outcome & Impact :</h5>
              <p className="pl-30 mb-10">
                - Seamless transition of traditional astrology content into the
                digital era.
              </p>
              <p className="pl-30 mb-10">
                - Videos were well-received by both his long-time followers and
                new YouTube audience.
              </p>
              <p className="pl-30 mb-55">
                - Established Ashok Pagaria’s digital presence in a highly
                professional and dignified manner.
              </p>
            </p>
            {/* <FaqSection /> */}
            {/* <GallarySection /> */}
            <div className="text-latout">
              <h5>Conclusion </h5>
              <p className="mb-55 " style={{ textAlign: "justify" }}>
                This project showcased how even veteran professionals can build
                strong digital footprints with the right strategy and technical
                support. Victory Cineworld was proud to support Astrologer Ashok
                Pagaria in preserving and sharing his legacy with the world
                through high-quality video content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstrologyPortfolioDetailsArea;
