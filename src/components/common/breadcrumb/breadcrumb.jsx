import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import BgImage1 from "@assets/img/bg/banner.webp";
import BgImage2 from "@assets/img/bg/banner5.jpg";
import BgImage3 from "@assets/img/bg/banner6.jpg";
import BgImage4 from "@assets/img/bg/banner7.png";

const images = [BgImage1.src, BgImage2.src, BgImage3.src,  BgImage4.src];

const Breadcrumb = ({ title, subTitle }) => {
  const [currentBg, setCurrentBg] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => {
        const nextIndex = (images.indexOf(prevBg) + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="adjust-header-space bg-common-black"></div>
      <div
        className="fm-breadcrumb-area breadcrumb-style"
        style={{ backgroundImage: `url(${currentBg})`, maxHeight: "135px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="page-title-wrapper ">
                <h1 className="page-title">{title}</h1>
              </div>
              <div className="breadcrumb-menu ">
                <nav
                  aria-label="Breadcrumbs"
                  className="breadcrumb-trail breadcrumbs"
                >
                  <ul className="trail-items">
                    <li className="trail-item trail-begin ">
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="trail-item trail-end ">
                      <span>{subTitle}</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
