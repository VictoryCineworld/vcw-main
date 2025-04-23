import Image from "next/image";
import React from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import img from "@assets/img/brand/amigos-1.jpg";

const MiddleSection = ({ item }) => {
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Client : </strong>Amigos Kitchen
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
            <strong>Industry : </strong>Hospitality
          </p>
        </div>
        <div className="case-meta-item">
          <p>
            <strong>View : </strong> Website{" "}
          </p>
        </div>
      </div>

      {/* ✅ Updated Image Wrapper */}
      <div
        className="case-details-thumb"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Image
          src={img}
          alt="Amigos Kitchen"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <h4 className="case-subtitle mb-25 ">
        <span>
          <CaseSubtitleIcon />
        </span>
        Case Study: Instagram Content Creation & Management for Amigose Kitchen
      </h4>
      <h4>Client Overview </h4>
      <p className="mb-55" style={{ textAlign: "justify" }}>
        Amigose Kitchen is a popular and well-known standalone restaurant
        located in Chhatrapati Sambhajinagar. Renowned for its fusion dishes and
        vibrant ambiance, the restaurant draws a crowd of foodies, families, and
        young diners looking for both taste and experience. To amplify their
        local digital presence, Amigose Kitchen partnered with Victory Cineworld
        to revamp their Instagram game.
      </p>

      <h4 className="case-subtitle mb-25">
        <span>
          <CaseSubtitleIcon />
        </span>
        Project Scope & Objectives
      </h4>
      <p className="mb-30 "  style={{ textAlign: "justify" }}>
        Victory Cineworld was onboarded to manage Instagram-based digital
        content creation and engagement strategies for Amigose Kitchen. The main
        goals were:
      </p>
      <p>
        <li>- Build a visually enticing and consistent brand presence.</li>
        <li>- Drive footfall from Instagram through engaging content.</li>
        <li>- Increase awareness and popularity within Chh Sambhajinagar.</li>
        <li>
         - Highlight special dishes, chef stories, customer experiences, and
          interiors.
        </li>
      </p>
    </div>
  );
};

export default MiddleSection;
