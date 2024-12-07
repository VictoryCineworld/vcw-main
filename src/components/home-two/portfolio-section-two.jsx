import PortfolioData from "@data/portfolio-data";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import BtnBgImg from "@assets/img/bg/btn-bg.png";
import Link from "next/link";

const PortfolioSectionTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setvideoId] = useState(" ");
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setvideoId(id)
  }
  return (
    <>
      <section className="featured-area bg-common-black section-spacing-bottom">
        <div className="container">
          <div className="row section-title-spacing justify-content-center wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <span className="section-subtitle title-anim">
                  FEATURED PROJECTS
                </span>
                <h2 className="section-main-title text-white title-anim">
                  Our Featured Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="fm-featured-wrapper-2">
            {PortfolioData.slice(6, 10).map((item) => (
              <div className="fm-single-featured-2 wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                <div className={item.portfolioItemClass}>
                  <Link href={`/portfolio-details/${item.id}`}>
                    <Image
                      src={item.image}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                  <div className="fm-featured-content-2">
                    <div className="fm-featured-content-inner">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <h4 className="fm-featured-title">{item.title}</h4>
                      </Link>
                      <span className="fm-featured-meta">
                        {item.releaseDate}
                      </span>
                    </div>

                    <div
                      className="fm-video-play"
                      onClick={() => { openVideoModal(item.videoUrl) }}
                    >
                      <button
                        className="fm-featured-video-wrapper fm-featured-video-btn btn-clr popup-video btn-pos" >
                        <i className="fas fa-play"></i>
                        <span>Play Trailer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="fm-featured-info wow fmSlideInLeft" data-wow-delay="0.5s">
              <div className="featured-btn-circle-wrap-2">
                <div className="featured-btn-circle-wrap btn_wrapper">
                  <Link
                    href="/service"
                    className="featured-rotate-btn btn__item-move"
                  >
                    <Image
                      className="image-text"
                      src={BtnBgImg}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                    <span>
                      <i className="flaticon-right-arrow-1"></i>
                    </span>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <ModalVideo
        channel="youtube"
        autoPlay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default PortfolioSectionTwo;
