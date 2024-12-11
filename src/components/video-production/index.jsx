import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import VideoProduction from "./VideoProduction";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Video Production" subTitle="Video Production" />
        <VideoProduction />
        
      </main>
      <FooterOne />
    </>
  );
};

export default index;
