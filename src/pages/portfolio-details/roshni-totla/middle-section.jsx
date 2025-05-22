import Image from "next/image";
import React from "react";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import img from "@assets/img/brand/roshni/roshni_banner.jpg";

const MiddleSection = ({ item }) => {
  return (
    <div className="col-xxl-12">
      <div className="case-meta-wrapper">
        <div className="case-meta-item">
          <p>
            <strong>Client : </strong>Dr Roshni Totla
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
            <strong>Industry : </strong>Healthcare / Pediatrician{" "}
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
        Case Study: Social Media Content Creation for Aura Ability Unfold
        (Jayashree Ma’am)
      </h4>
      <h5>Client Overview </h5>
      <p className="mb-55" style={{ textAlign: "justify" }}>
        Aura Ability Unfold, led by Jayashree Agrawaal, is a holistic wellness
        and spiritual guidance platform based in India. Jayashree is a renowned
        Numerologist, Certified Hypnotherapist, Tarot Card Reader, Healer, and
        Astrologer. With her in-depth expertise and growing clientele, she
        wanted to enhance her digital presence to reach a wider audience and
        build a strong online brand.
      </p>

      <h4 className="case-subtitle mb-15">
        <span>
          <CaseSubtitleIcon />
        </span>
        Project Scope & Objectives
      </h4>
      <p className="mb-10 " style={{ textAlign: "justify" }}>
        Victory Cineworld partnered with Aura Ability Unfold to provide
        professional content creation and digital support for Instagram and
        YouTube. The goals included:
      </p>
      <p className="mb-10">
        - Establishing credibility and trust in the online wellness community.
      </p>
      <p className="mb-10">
        - Educating the audience on numerology, astrology, healing, and tarot
        through regular video content.
      </p>
      <p className="mb-10">
        - Creating a personal connect between Jayashree Ma’am and her followers.
      </p>
      <p className="mb-10">
        - Building a steady growth of followers and engagement.
      </p>
    </div>
  );
};

export default MiddleSection;
