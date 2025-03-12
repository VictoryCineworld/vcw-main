import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterOneCopyright from "./component/footer-one-copyright";
import Logo from '@assets/img/logo/logo.png';
import bgImage from '@assets/img/bg/footer/img-1.jpg';
import footerData from "@data/footer-data";
import { PhotoProvider, PhotoView } from "react-photo-view";


const FooterOne = () => {
  return (
    <>
      <PhotoProvider>
        <footer>
          <div className="footer-area-5 section-spacing-top pos-rel">
            <div
              className="footer-bg-3"
              style={{ backgroundImage: `url(${bgImage.src})` }}
            ></div>
            <div className="container">
              <div className="footer-middle-area">
                <div className="footer-wrapper footer-widget-about">
                  <div className="footer-logo-2">
                    <Link href="/">
                      <Image
                        src={Logo}
                        style={{ width: "120px", height: "auto" }}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                      {footerData.description.description}
                    </p>
                  </div>
                </div>
                <div className="footer-wrapper footer-widget-gallery">
                  <div className="footer-title">
                    <h4>Our Services</h4>
                  </div>
                  <li>
                  <ul className="mb-3">
                    <Link href={'/services/video-production'}>
                    Video Production
                    </Link>
                  </ul>
                  <ul className="mb-3">
                    <Link href={'/services/content-creation-content-designing/campaign-content-creation'}>
                    Content Creation
                    </Link>
                  </ul>
                  <ul className="mb-3">
                    <Link href={'/services/digital-marketing/social-media-management'}>
                    Digital Marketing
                    </Link>
                  </ul>
                  <ul className="mb-3">
                    <Link href={'/services/video-production/post-production'}>
                    Post Production
                    </Link>
                  </ul>
                  <ul className="mb-3">
                    <Link href={'/services/video-production/product-shoot'}>
                    Film Production
                    </Link>
                  </ul>
                  <ul className="mb-3">
                    <Link href={'/services/it-services/web-design-development'}>
                    IT Services
                    </Link>
                  </ul>
                  </li>
                </div>
                <div className="footer-wrapper footer-widget-social">
                  <div className="footer-title">
                    <h4>Follow Us</h4>
                  </div>
                  <div className="footer-info">
                    <p>Connect us with social media</p>
                  </div>
                  <div className="fm-social-2 footer-social-3">
                    {footerData.socialLink.socialIcons.map((item) => (
                      <Link key={item.id} href={item.url} target="_blank">
                        <i className={item.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="footer-wrapper footer-widget-contact">
                  <div className="footer-title">
                    <h4>Contact Us</h4>
                  </div>
                  <ul className="footer-2-link">
                    {footerData.quickLinks.address.slice(0,3).map((item) => (
                      <li key={item.id}>
                        <i className={item.addressWrapperClass}></i>
                        <p>
                          {" "}
                          <Link href={item.contactInfo}>{item.contact}</Link>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <FooterOneCopyright />
            </div>
          </div>
        </footer>
      </PhotoProvider>
    </>
  );
};

export default FooterOne;

