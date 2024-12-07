import React from "react";
import CuponArea from "./cupon-area";
import CheckoutSection from "./checkout-section";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderThere from "@layout/headers/header-there";
import FooterOne from "@layout/footers/footer-one";

const index = () => {
  return (
    <>
      <HeaderThere />
      <main>
        <Breadcrumb title={"Cheakout"} subTitle={"Cheakout"} />
        <CuponArea />
        <CheckoutSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
