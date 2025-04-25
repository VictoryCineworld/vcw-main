import Image from "next/image";
import React from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import img from "@assets/img/brand/astrology-1.jpg";

const MiddleSection = ({ item }) => {
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Client : </strong>Astrologer Ashok Pagaria
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
            <strong>Industry : </strong>Astrology
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

      <h4 className="case-subtitle mb-25">
        <span>
          <CaseSubtitleIcon />
        </span>
        Case Study: YouTube Video Production for Astrologer Ashok Pagaria{" "}
      </h4>
      <h4>Client Overview </h4>
      <p className="mb-55" style={{ textAlign: "justify" }}>
        Astrologer Ashok Pagaria is a respected and senior astrologer, aged 74,
        known for his deep wisdom and decades of experience in the field. Based
        in India, he has helped countless individuals with his astrological
        insights. To share his knowledge with a wider audience, he decided to
        step into the digital space, especially YouTube.
      </p>

      <h4 className="case-subtitle mb-25">
        <span>
          <CaseSubtitleIcon />
        </span>
        Objectives
      </h4>
      <p className="mb-30 " style={{ textAlign: "justify" }}>
        The goal was to create high-quality, visually appealing
        astrology-related video content for YouTube to help him build a
        professional digital identity and connect with younger, tech-savvy
        followers while preserving his traditional values.
      </p>
    </div>
  );
};

export default MiddleSection;
