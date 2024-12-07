import movieData from "@data/movie-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//swipper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const MovieSliderSix = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState(" ")
  const openVideoModal = (id) => {
    setIsOpen(!isOpen)
    setVideoUrl(id)
  }
  return (
    <>
      <div className="fm-landing-trending-area bg-common-black section-spacing">
        <div className="container">
          <div className="row align-items-center g-5 section-title-spacing-small wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-7">
              <h4 className="fm-landing-section-title text-white fade_bottom_3">
                Premium
              </h4>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <div className="fm-landing-trending-slider-navigation fade_bottom_3 text-sm-end">
                <span className="fm-landing-premium-prev">
                  <i className="fa-light fa-angle-left"></i>
                </span>
                <span className="fm-landing-premium-next">
                  <i className="fa-light fa-angle-right"></i>
                </span>
                <span className="fm-landing-viewall-text">
                  <Link href="/movie">View All</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="0.4s">
            <div className="col-xl-12">
              <div className="fm-landing-trending-slider-wrapper">
                <div className="fm-landing-premium-slider-active">
                  <div>
                    <Swiper
                      modules={[Navigation]}
                      loop={true}
                      centeredSlides={false}
                      navigation={{
                        nextEl: ".fm-landing-premium-next",
                        prevEl: ".fm-landing-premium-prev",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        480: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        992: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1200: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        1400: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                        },
                      }}
                    >
                      {movieData.slice(47, 52).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-landing-trending-single">
                            <div className="fm-landing-trending-single-img">
                              <span className="fm-landing-trending-premium-badge">
                                <Image
                                  src={item.badgeImg}
                                  style={{ width: "100%", height: "auto" }}
                                  alt="img"
                                />
                              </span>
                              <Link href={`/movie-details/${item.id}`}>
                                <Image
                                  src={item.image}
                                  style={{ width: "100%", height: "auto" }}
                                  alt="img"
                                />
                              </Link>
                              <span className="fm-landing-trending-time">
                                2: 57: 13
                              </span>
                              <button className="fm-trending-video-btn popup-video" onClick={() => { openVideoModal(item.videoUrl) }}>
                                <span>
                                  <i className="fa-thin fa-play"></i>WATCH
                                </span>
                              </button>
                            </div>
                            <div className="fm-landing-trending-content">
                              <div className="fm-landing-trending-content-text">
                                <h4 className="fm-landing-trending-content-title">
                                  <Link href={`/movie-details/${item.id}`}>
                                    {item.title}
                                  </Link>
                                </h4>
                                <span className="fm-landing-trending-rating">
                                  {item.rettings.map((item) => (
                                    <i className={item.icon} key={item.id}></i>
                                  ))}
                                </span>
                                <div className="fm-landing-trending-meta-wrapper">
                                  <span className="fm-landing-trending-meta">
                                    {item.tradingTime}
                                  </span>
                                  <span className="fm-landing-trending-meta">
                                    {item.views}
                                  </span>
                                </div>
                              </div>
                              <div className="fm-landing-trending-content-bookmark">
                                <span className="fm-landing-trending-content-bookmark-icon">
                                  <i className="flaticon-love"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo autoPlay isOpen={isOpen} videoId={videoUrl} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MovieSliderSix;
