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
    </div>
  );
};

export default MiddleSection;
