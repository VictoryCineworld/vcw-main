import Image from "next/image";
import React from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import img from "@assets/img/brand/prashant.png";

const MiddleSection = ({ item }) => {
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Client : </strong>Dr Umesh Mundada
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
            <strong>Industry : </strong>Healthcare / sexologist{" "}
          </p>
        </div>
        <div className="case-meta-item"></div>
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
        Multi-Platform Growth Strategy for Dr. Umesh Mundada
      </h4>
      <h5 className="mb-15">Client Overview </h5>
      <p className="mb-55" style={{ textAlign: "justify" }}>
        Dr. Umesh Mundada is a renowned sexologist practicing across three major
        cities in Maharashtra: Mumbai, Pune, and Chhatrapati Sambhajinagar. With
        a vision to destigmatize sexual health and offer professional
        consultations, Dr. Mundada approached us to scale his presence both
        organically and via performance marketing.
      </p>

      <h4 className="case-subtitle mb-15">
        <span>
          <CaseSubtitleIcon />
        </span>
        Project Scope & Objectives
      </h4>
      <p className="mb-10 " style={{ textAlign: "justify" }}>
        Victory Cineworld partnered with Dr. Mundada to provide a comprehensive
        digital strategy that covers:
      </p>

    </div>
  );
};

export default MiddleSection;
