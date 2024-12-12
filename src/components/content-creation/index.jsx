import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import BlogWideArea from "./blog-wide-area";
import ContentCreation from "./ContentCreation";
import ContentSub from "./subpage/ContentSub";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Content Creation" subTitle="Content Creation" />
        <ContentCreation />
        
      </main>
      <FooterOne />
    </>
  );
};

export default index;
