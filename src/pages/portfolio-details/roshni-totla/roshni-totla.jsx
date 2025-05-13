import React from "react";
// import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";

import MiddleSection from "./middle-section";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";

const DrRoshniPortfolioDetailsArea = ({ item }) => {
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
              Victory Cineworld implemented a holistic Instagram strategy to build a credible and engaging presence for Dr. Roshni Totala.
            </h4>

            <h5 className="mb-10">Content Strategy:</h5>
            <p className="pl-30 mb-10">
              - Weekly content planning aligned with trending and educational skincare topics.
            </p>
            <p className="pl-30 mb-30">
              - Highlighted client testimonials, FAQs, treatment explainers, and doctor insights to build trust and interest.
            </p>

            <h5 className="mb-10">Video Content Production:</h5>
            <p className="pl-30 mb-10">
              - High-quality reels and stories showcasing procedures, skincare routines, myth-busting, and clinic vibes.
            </p>
            <p className="pl-30 mb-30">
              - All content edited to reflect the brand’s aesthetic and clarity, enhancing trustworthiness.
            </p>

            <h5 className="mb-10">Post Designs & Visuals:</h5>
            <p className="pl-30 mb-10">
              - Designed clean, clinical, and relatable visuals with carousels and motion graphics to improve engagement and saves.
            </p>
            <p className="pl-30 mb-30">
              - Consistency in colors, typography, and content tone helped maintain a recognizable brand identity.
            </p>

            <h5 className="mb-10">Profile Optimization:</h5>
            <p className="pl-30 mb-10">
              - Strategically written bio, highlight covers, and organized content to improve user experience.
            </p>
            <p className="pl-30 mb-30">
              - Hashtag research and optimization to increase discoverability and reach.
            </p>

            <h5 className="mb-10">Results & Highlights:</h5>
            <p className="pl-30 mb-10">
              - Consistent organic growth in followers and engagement without any paid ads.
            </p>
            <p className="pl-30 mb-10">
              - Increased DM inquiries and consultation requests.
            </p>
            <p className="pl-30 mb-30">
              - Instagram profile now functions as a trusted digital portfolio for prospective patients.
            </p>

            <div className="text-latout">
              <h5>Conclusion & Key Takeaways</h5>
              <p className="mb-55" style={{ textAlign: "justify" }}>
                With no reliance on paid promotions, Victory Cineworld helped Dr. Roshni Totala build an authentic and meaningful presence on Instagram. Through value-driven content, consistent production, and a well-crafted strategy, the project demonstrates the power of organic growth in the cosmetology and healthcare industry.
              </p>
              {/* Optional: Add sample videos, engagement screenshots, and testimonials here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrRoshniPortfolioDetailsArea;
