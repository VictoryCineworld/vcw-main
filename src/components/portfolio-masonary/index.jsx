import React from "react";
import PortfolioMasonaryArea from "./portfolio-masonary-area";
import { Header } from "@layout/index";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Test Cases" subTitle="" />
        <PortfolioMasonaryArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
