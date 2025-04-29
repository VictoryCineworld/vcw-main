import React from "react";
// import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";

import MiddleSection from "./middle-section";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";

const AuraPortfolioDetailsArea = ({ item }) => {
  return (
    <section className="case-details-area">
      <div className="container">
        <div className="row mb-40">
          <MiddleSection item={item} />
        </div>
      </div>
      {/* <PortfolioSliderTwo /> */}
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
              Execution & Strategy
              Victory Cineworld implemented a comprehensive spiritual content strategy for Aura Ability Unfold, including:
            </h4>

            <h5 className="mb-10">YouTube Videos (Long Format):</h5>
            <p className="pl-30 mb-10">
              - Educational and insight-driven videos on various spiritual and numerology topics.
            </p>
            <p className="pl-30 mb-30">
              - Professionally shot with multi-cam setup and clean audio.
            </p>

            <h5 className="mb-10">Instagram Reels & Shorts:</h5>
            <p className="pl-30 mb-10">
              - Short-form content tailored to Instagram and YouTube Shorts.
            </p>
            <p className="pl-30 mb-30">
              - Snippets from long-format content and trendy quick tips related to her expertise.
            </p>

            <h5 className="mb-10">Festive Graphics & Thematic Posts:</h5>
            <p className="pl-30 mb-10">
              - Creatives designed for festivals, spiritual dates, and astrological events.
            </p>
            <p className="pl-30 mb-30">
              - Maintained visual identity and brand alignment.
            </p>

            <h5 className="mb-10">Production & Post-Production:</h5>
            <p className="pl-30 mb-10">
              - In-house shoot setup, camera, lighting, and sound.
            </p>
            <p className="pl-30 mb-30">
              - Fast turnaround editing with subtitles, transitions, and audio balancing.
            </p>

            <h5 className="mb-10">Content Strategy & Scheduling:</h5>
            <p className="pl-30 mb-10">
              - Planning video topics and publishing calendar.
            </p>
            <p className="pl-30 mb-30">
              - Coordination with the client to align with her energy readings and content preferences.
            </p>

            <h5 className="mb-10">Results & Impact:</h5>
            <p className="pl-30 mb-10">
              - Improved brand visibility and awareness in niche spiritual communities.
            </p>
            <p className="pl-30 mb-10">
              - Steady follower growth and increased video reach.
            </p>
            <p className="pl-30 mb-10">
              - Enhanced engagement with followers through relatable and insightful content.
            </p>
            <p className="pl-30 mb-30">
              - Built a personal connection between Jayashree Ma’am and her audience.
            </p>

            <div className="text-latout">
              <h5>Conclusion & Key Takeaways</h5>
              <p className="mb-55" style={{ textAlign: "justify" }}>
                Through consistent, strategic content creation and a deep understanding of the wellness niche, Victory Cineworld helped Aura Ability Unfold expand its digital footprint. The transformation showcased the power of authenticity, consistency, and well-produced content in building a spiritual brand online.
              </p>
              {/* Optional: Add sample videos, engagement screenshots, and testimonials here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuraPortfolioDetailsArea;
