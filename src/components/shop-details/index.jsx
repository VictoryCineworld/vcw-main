import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import React from "react";
import ShopDetailsArea from "./shop-details-area";
import HeaderThere from "@layout/headers/header-there";

const index = ({ item }) => {
  return (
    <>
      <HeaderThere />
      <main>
        <ShopDetailsArea item={item} />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
