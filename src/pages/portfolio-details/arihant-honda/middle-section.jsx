import Image from "next/image";
import React from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import img from "@assets/img/brand/honda/honda_banner.jpg";

const MiddleSection = ({ item }) => {
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Client : </strong>Honda
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
            <strong>Industry : </strong>Automobile
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
        Case Study: Digital Content Campaign for Honda Bike Dealership,
        Aurangabad
      </h4>
      <h5>Client Overview </h5>
      <p className="mb-55" style={{ textAlign: "justify" }}>
        Honda Bike Dealership, based in Aurangabad, is a prominent name in the
        two-wheeler automotive sector, offering a wide range of Honda
        motorcycles and scooters. With a focus on customer service and brand
        trust, the dealership wanted to build a strong digital footprint to
        connect with the younger generation and tech-savvy buyers.
      </p>

      <h4 className="case-subtitle mb-15">
        <span>
          <CaseSubtitleIcon />
        </span>
        Project Scope & Objectives
      </h4>
      <p className="mb-10 " style={{ textAlign: "justify" }}>
        Victory Cineworld was entrusted with the task of building an
        informative, engaging, and value-driven content strategy for the
        dealership’s Instagram presence. The primary goals were:
      </p>
      <p className="mb-10">
        - Increase showroom footfall and test drive inquiries.
      </p>
      <p className="mb-10">- Educate potential buyers about different bike models.
      </p>
      <p className="mb-10">- Build trust by showcasing service transparency.
      </p>
      <p className="mb-10">- Improve brand visibility through customer stories and interactive content.
      </p>
    </div>
  );
};

export default MiddleSection;
