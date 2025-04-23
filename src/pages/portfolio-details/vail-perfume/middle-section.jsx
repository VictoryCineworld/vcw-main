import Image from "next/image";
import React from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import img from "@assets/img/brand/vail.png";

const MiddleSection = ({ item }) => {
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Client : </strong>Annujj's Vail Perfume
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
            <strong>Industry : </strong>Cosmetics
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
        Case Study: Instagram Content Creation for Vail Perfume
      </h4>
      <h5>Client Overview </h5>
      <p className="mb-55" style={{ textAlign: "justify" }}>
        Vail Perfume is an emerging perfume reseller brand founded by
        entrepreneur Annujj, who runs his own e-commerce website specializing in
        high-quality fragrances. With a vision to position Vail Perfume among
        top-tier fragrance sellers in India, the goal was to establish a premium
        and engaging presence on Instagram to drive awareness, engagement, and
        ultimately sales.
      </p>

      <h4 className="case-subtitle mb-15">
        <span>
          <CaseSubtitleIcon />
        </span>
        Project Scope & Objectives
      </h4>
      <p className="mb-10 " style={{ textAlign: "justify" }}>
        Victory Cineworld partnered with Vail Perfume to elevate its digital
        presence by crafting visually rich, high-end content tailored for
        Instagram. The focus was to showcase the brand's elegance, uniqueness,
        and product value.
      </p>
    </div>
  );
};

export default MiddleSection;
