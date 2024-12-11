import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import DigitalMarketing from "./DigitalMarketing";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Content Creation" subTitle="Content Creation" />
        <DigitalMarketing />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
