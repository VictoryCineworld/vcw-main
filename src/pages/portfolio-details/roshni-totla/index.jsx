import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import { Header } from "@layout/index";
import React from "react";
import CaseQouteArea from "./case-quote-area";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import DrRoshniPortfolioDetailsArea from "./roshni-totla";

const index = ({ item }) => {
  return (
    <>
      <Header extraClass="fm-header-area header-border header-spc-2 fm-header-transparent header-main" />
      <main>
        <Breadcrumb title="Dr Prashant Chawan" subTitle="Test Case" />
        <DrRoshniPortfolioDetailsArea item={item} />
        <CaseQouteArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
