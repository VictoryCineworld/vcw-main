import { Header } from "@layout/index";
import React from "react";
import MovieDetailsArea from "./movie-details-area";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = ({ item }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Movie Details" subTitle="Movie Details" />
        <MovieDetailsArea item={item} />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
