import Image from "next/image";
import React from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import img from "@assets/img/brand/aura_ability/aura.jpg";

const MiddleSection = ({ item }) => {
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Client : </strong>Aura Ability Unfold
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>Service : </strong>Instagram Handling, Reels Production,
            Post Production, etc.
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>Industry : </strong>Healing & well-being
          </p>
        </div>
      </div>

      {/* ✅ Responsive & Properly Fit Image Box */}
      <div
        className="case-details-thumb"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          marginTop: "30px",
          marginBottom: "30px",
          overflow: "hidden",
          borderRadius: "12px", // optional: rounded corners
        }}
      >
        <Image
          src={img}
          alt="Aura Ability Unfold"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <h4 className="case-subtitle mb-25">
        <span>
          <CaseSubtitleIcon />
        </span>
        Case Study: Social Media Content Creation for Aura Ability Unfold
        (Jayashree Ma’am)
      </h4>
      <h5>Client Overview</h5>
      <p className="mb-55" style={{ textAlign: "justify" }}>
        Aura Ability Unfold, led by Jayashree Agrawaal, is a holistic wellness
        and spiritual guidance platform based in India...
      </p>

      <h4 className="case-subtitle mb-15">
        <span>
          <CaseSubtitleIcon />
        </span>
        Project Scope & Objectives
      </h4>
      <p className="mb-10" style={{ textAlign: "justify" }}>
        Victory Cineworld partnered with Aura Ability Unfold to provide
        professional content creation and digital support for Instagram and
        YouTube...
      </p>
    </div>
  );
};

export default MiddleSection;
