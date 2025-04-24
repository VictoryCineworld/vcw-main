import React from "react";
import PortfolioSliderTwo from "@components/elements/slider/portfolio-slider/portfolio-slider-two";

import MiddleSection from "./middle-section";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";

const ArihantPortfolioDetailsArea = ({ item }) => {
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
              Execution & Strategy Our team crafted a multi-layered content
              strategy tailored to the dealership’s target audience. The
              approach included:
            </h4>

            <h5 className="mb-10">Informative Bike Model Videos::</h5>
            <p className="pl-30 mb-10">
              - Created explainer reels for each Honda bike model.
            </p>
            <p className="pl-30 mb-30">
              - Highlighted key features, performance, and use-case scenarios.
            </p>

            <p>
              <h5 className="mb-20">Bike Servicing Explainers: :</h5>
              <p className="mb-10"> Educational videos on topics such as:</p>
              <p className="pl-30 mb-10">- Engine oil types</p>
              <p className="pl-30 mb-10">- Genuine spare parts</p>
              <p className="pl-30 mb-10">
                - Importance of color code matching in service
              </p>
              <p className="pl-30 mb-10">
                - Insurance and maintenance best practices
              </p>
              <p className="pl-30 mb-10">- Pricing transparency in servicing</p>

              <h5 className="mb-10">Model Comparison Videos: :</h5>
              <p className="pl-30 mb-10">
                - Created comparative videos (e.g., Activa Old 125 vs. New 125).
              </p>
              <p className="pl-30 mb-30">
                - Collaborated with local influencers for unbiased perspectives.
              </p>

              <h5 className="mb-10">Customer Experience Videos:</h5>
              <p className="pl-30 mb-10">
                - Captured real-time delivery moments and client testimonials.
              </p>
              <p className="pl-30 mb-30">
                - Built trust through authentic, relatable storytelling.
              </p>

              <h5 className="mb-10">Google Review Reels:</h5>
              <p className="pl-30 mb-10">
                - Designed carousels and video reels highlighting positive
                customer reviews.
              </p>
              <p className="pl-30 mb-30">
                - Encouraged more customers to leave reviews through visual
                incentives.
              </p>

              <h5 className="mb-10">WhatsApp Automation Feature Video: </h5>
              <p className="pl-30 mb-10">
                - Explained how customers can interact with the dealership
                through WhatsApp automation.
              </p>
              <p className="pl-30 mb-30">
                - Planned influencer involvement to demonstrate usage.
              </p>

              <h5 className="mb-10">Results & Impact :</h5>
              <p className="pl-30 mb-10">
                - Substantial increase in Instagram engagement and video reach.
              </p>
              <p className="pl-30 mb-10">
                - More inquiries received through direct messages and WhatsApp.{" "}
              </p>
            </p>
            <p>- Improved customer trust and dealership transparency.</p>
            <p className="mb-30">
              - Positive feedback from both new buyers and existing customers.
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

export default ArihantPortfolioDetailsArea;
