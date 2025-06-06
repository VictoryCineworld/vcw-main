import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import { Header } from "@layout/index";
import React from "react";
import AmigosPortfolioDetailsArea from "./amigos-details-area"; 
import CaseQouteArea from "./case-quote-area";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";

const index = ({ item }) => {
  return (
    <>
      <Header extraClass="fm-header-area header-border header-spc-2 fm-header-transparent header-main" />
      <main>
        <Breadcrumb title="Amigos Kitchen" subTitle="Test Case" />
        <AmigosPortfolioDetailsArea item={item} />
        <CaseQouteArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
