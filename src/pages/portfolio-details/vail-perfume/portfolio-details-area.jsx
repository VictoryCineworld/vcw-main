import React from "react";
import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";

import MiddleSection from "./middle-section";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";

const VailPortfolioDetailsArea = ({ item }) => {
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
            <h5 className="mb-10">Instagram Reels Production:</h5>
            <p className="pl-30 mb-10">
              - Concept-driven storytelling through cinematic reels.
            </p>
            <p className="pl-30 mb-10">
              - Highlighting product aesthetics, lifestyle integration, and
              luxury positioning.
            </p>
            <p className="pl-30 mb-10">
              - Included product unboxing, perfume application moments,
              fragrance mood reels, and seasonal themes.
            </p>
            <p className="pl-30 mb-30">
              -<span className="font-bold"> Informative Character Reels:</span>{" "}
              We created single-character informative reels featuring the
              founder, Annujj himself, where he explained different types of
              perfumes, usage tips, and customer-focused insights to build trust
              and authority.
            </p>

            <p>
              <h5 className="mb-10">Creative Direction:</h5>
              <p className="pl-30 mb-10">
                - High-end visual treatment with elegant lighting and backdrops.
              </p>
              <p className="pl-30 mb-30">
                - On-brand color grading and slow-motion shots to emphasize
                richness.
              </p>

              <h5 className="mb-10">Product Shoots: :</h5>
              <p className="pl-30 mb-10">
                - Dedicated shoots for perfume bottles, packaging, and lifestyle
                shots.
              </p>
              <p className="pl-30 mb-30">
                - Macro shots to highlight details and craftsmanship.
              </p>

              <h5 className="mb-10">Post-Production Excellence:</h5>
              <p className="pl-30 mb-10">
                - Clean edits, captivating transitions, audio enhancement.
              </p>
              <p className="pl-30 mb-30">
                - Delivered optimized formats for Instagram reels and stories.
              </p>

              <h5 className="mb-10">Digital Marketing Services:</h5>
              <p className="pl-30 mb-10">
                - Strategized and executed paid Instagram promotions.
              </p>
              <p className="pl-30 mb-10">
                - Audience targeting to drive relevant traffic to the website.
              </p>
              <p className="pl-30 mb-10">
                - Focused on increasing sales conversions and brand visibility.
              </p>

              <h5 className="mb-10">Results & Impact :</h5>
              <p className="pl-30 mb-10">
                - Strong visual identity established on Instagram.
              </p>
              <p className="pl-30 mb-10">
                - Boosted credibility among fragrance buyers.
              </p>
              <p className="pl-30 mb-10">
                - Enhanced engagement on reels through aesthetic and informative
                content.
              </p>
              <p className="pl-30 mb-55">
                - Drove targeted traffic to the e-commerce website, resulting in
                increased inquiries and sales.
              </p>
            </p>
            {/* <FaqSection /> */}
            {/* <GallarySection /> */}
            <div className="text-latout">
              <h5>Conclusion & Key Takeaways</h5>
              <p className="mb-55 " style={{ textAlign: "justify" }}>
                Victory Cineworld successfully helped Vail Perfume build a
                luxury perfume reseller identity on Instagram by delivering
                premium content that resonates with modern fragrance
                enthusiasts. Through thoughtful storytelling, informative
                presentation, and digital marketing strategies, the brand’s
                online persona became more refined, relatable, and
                conversion-oriented.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VailPortfolioDetailsArea;
