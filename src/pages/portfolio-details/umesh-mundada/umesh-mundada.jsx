import React from "react";
// import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";

import MiddleSection from "./middle-section";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";

const DrUmeshPortfolioDetailsArea = ({ item }) => {
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
              Victory Cineworld implemented a comprehensive digital growth strategy across YouTube and paid platforms for Dr. Umesh Mundada.
            </h4>

            <h5 className="mb-10">YouTube Channel Management:</h5>
            <p className="pl-30 mb-10">
              - Created and managed two language-specific channels: Marathi (200K+ subscribers) and Hindi (95K+ subscribers).
            </p>
            <p className="pl-30 mb-30">
              - Produced professional, educational videos on sexual wellness with consistent delivery and high engagement.
            </p>

            <h5 className="mb-10">YouTube SEO & Organic Reach:</h5>
            <p className="pl-30 mb-10">
              - Deployed keyword-optimized video titles, descriptions, tags, and compelling thumbnails.
            </p>
            <p className="pl-30 mb-30">
              - Drove sustained organic traffic growth and increasing monthly subscribers/view counts.
            </p>

            <h5 className="mb-10">Performance Marketing (Meta & Google Ads):</h5>
            <p className="pl-30 mb-10">
              - Built and managed lead-generation ad campaigns on Meta and Google.
            </p>
            <p className="pl-30 mb-10">
              - Used geo-targeted strategies for clinics in Mumbai, Pune, and Sambhajinagar.
            </p>
            <p className="pl-30 mb-30">
              - Campaigns delivered measurable patient inquiries and direct bookings.
            </p>

            <h5 className="mb-10">Content Production & Localization:</h5>
            <p className="pl-30 mb-10">
              - Scripts written in regional languages with a culturally sensitive approach.
            </p>
            <p className="pl-30 mb-30">
              - Delivered high-quality Marathi and Hindi content to maximize reach and relatability.
            </p>

            <h5 className="mb-10">Results & Impact:</h5>
            <p className="pl-30 mb-10">
              - Achieved a combined subscriber base of over 295K across both channels.
            </p>
            <p className="pl-30 mb-10">
              - Increased inbound consultation requests through informative video content.
            </p>
            <p className="pl-30 mb-10">
              - ROI-positive results from paid campaigns on both Meta and Google platforms.
            </p>
            <p className="pl-30 mb-30">
              - Strengthened public awareness around sexual health in both regional and national markets.
            </p>

            <div className="text-latout">
              <h5>Conclusion & Key Takeaways</h5>
              <p className="mb-55" style={{ textAlign: "justify" }}>
                Victory Cineworld’s strategic execution helped position Dr. Umesh Mundada as a leading digital educator and consultant in the sexual wellness space. By combining powerful, relatable content with intelligent digital marketing, the campaign succeeded in both audience growth and real-world consultation conversions.
              </p>
              {/* Optional: Add sample YouTube thumbnails, campaign stats, and ad creatives here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrUmeshPortfolioDetailsArea;
