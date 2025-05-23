import React from "react";
import HomeAboutTwo from "../abouts/home-about-two";
import ServiceTwo from "./service-section-two";
import PortfolioSectionTwo from "./portfolio-section-two";
import TestimonialSliderOne from "@components/elements/slider/testimonial-slider/testimonial-slider-one";
import BlogSectionTwo from "./blog-section-two";
import VideoAreaSection from "./video-area-section";
import BrandAreaSection from "../elements/slider/brand-slider/brand-slider-one";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import HeaderTwo from "@layout/headers/header-two";
import HeroTwo from "./hero-two";

const index = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroTwo />
        <HomeAboutTwo />
        <ServiceTwo />
        <PortfolioSectionTwo />
        <TestimonialSliderOne />
        <BlogSectionTwo/>
        <VideoAreaSection />
        <BrandAreaSection />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
