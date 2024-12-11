import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import BlogWideArea from "./blog-wide-area";
import ContentCreation from "./ContentCreation";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Corporate Video" subTitle="Corporate Video" />
        <CorporateVideo />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
