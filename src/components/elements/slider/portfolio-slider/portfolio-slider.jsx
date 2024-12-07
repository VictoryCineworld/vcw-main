import Link from "next/link";
import React, { useState } from "react";
import SliderArrowLeft from "@assets/img/portfolio/slider-arrow-left.svg";
import SliderArrowRight from "@assets/img/portfolio/slider-arrow-right.svg";
//swipper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import PortfolioData from "@data/portfolio-data";
import Image from "next/image";
import ModalVideo from "react-modal-video";

const PortfolioSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };
  return (
    <>
      <div className="fm-project-films-area fm-film-spc bg-common-black">
        <div className="fm-project-films-carousel-wrapper fm-video-slider-2">
          <div className="fm-project-video2-active">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Navigation]}
                direction={"horizontal"}
                loop={true}
                speed={1500}
                spaceBetween={30}
                centeredSlides={"true"}
                grabCursor={true}
                mousewheel={true}
                mousewheelcontrol={"true"}
                keyboard={true}
                navigation={{
                  nextEl: ".fm-film-testimonial-next",
                  prevEl: ".fm-film-testimonial-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.5,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 3,
                  },
                  1600: {
                    slidesPerView: 3,
                  },
                }}
              >
                {PortfolioData.slice(26, 29).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div>
                      <div className="fm-films-video-button-main">
                        <button
                          onClick={() => {
                            openVideoModal(item.videoUrl);
                          }}
                          className="fm-film-video-btn popup-video"
                        >
                          <i className="fa-thin fa-play"></i>
                          <svg className="eltdf-svg-circle">
                            <circle cx="50%" cy="50%" r="45%"></circle>
                          </svg>
                        </button>
                      </div>
                      {/* <div
                        className="fm-project-films-single fm-video-slider-2-single"
                        style={{ backgroundImage: `url(${item?.image?.src})` }}
                      >
                        <div className="fm-project-films-single-content">
                          <span className="fm-project-films-single-director">
                            {item.subTitle}
                          </span>
                          <h4 className="fm-project-films-single-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      </div> */}
                    </div>
                    <div
                      className="fm-project-films-single fm-video-slider-2-single fm-film-dark-overlay"
                      style={{ backgroundImage: `url(${item.image.src})` }}
                    >
                      <div className="fm-project-films-single-content">
                        <span className="fm-project-films-single-director">
                          {item.subTitle}
                        </span>
                        <h4 className="fm-project-films-single-title">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="fm-film-testimonial-navigation">
            <span className="fm-film-testimonial-next testi-next">
              Next{" "}
              <Image
                src={SliderArrowRight}
                style={{ width: "100%", height: "auto" }}
                alt="icon"
              />
            </span>
            <span className="fm-film-testimonial-prev testi-prev">
              {" "}
              <Image
                src={SliderArrowLeft}
                style={{ width: "100%", height: "auto" }}
                alt="icon"
              />
              prev{" "}
            </span>
          </div>
        </div>
      </div>
      <ModalVideo
        autoPlay
        isOpen={isOpen}
        videoId={videoUrl}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default PortfolioSlider;
