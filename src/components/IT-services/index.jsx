import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import React from "react";
import ItServices from "./ItServices";
import { Header } from "@layout/index";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="IT Services" subTitle="IT Services" />
            <ItServices/>
      </main>
      <FooterOne />
    </>
  );
};

export default index;
