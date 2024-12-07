import movieData from "@data/movie-data";
import React from "react";
//swipper
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Link from "next/link";
import Image from "next/image";

const MovieSliderSeven = () => {
  return (
    <>
      <div className="fm-landing-download-movies-area section-spacing-bottom bg-common-black">
        <div className="container">
          <div className="fm-landing-download-movies-wrapper">
            <div className="fm-landing-movies-flex">
              <div className="fm-landing-download-movies-content-wrapper wow fadeInUp" data-wow-delay="0.3s">
                <div className="fm-landing-download-movies-content">
                  <span className="fm-landing-download-movies-content-subtext title-anim">
                    Watch Offline TV
                  </span>
                  <h4 className="fm-landing-download-content-text title-anim mb-25">
                    Download your shows and watch offline
                  </h4>
                  <h3 className="fm-download-big-text bdFadeUp">
                    HD <span>4k</span>
                  </h3>
                  <Link href="#" className="fm-download-btn bdFadeUp">
                    Download Now
                  </Link>
                </div>
              </div>
              <div className="fm-landing-download-movies-wrapper-section">
                <div className="fm-landing-download-movies-wrapper fix">
                  <div className="fm-landing-download-movies-flex justify-content-lg-end">
                    <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      slidesPerView={3}
                      spaceBetween={10}
                      loop={true}
                      grabCursor={true}
                      speed={1000}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      className="mySwiper1 d-height"
                    >
                      {movieData.slice(55, 59).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-dmovie-slide">
                            <Link href={`/movie-details/${item.id}`}>
                              <Image
                                src={item.image}
                                alt="img"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      slidesPerView={3}
                      spaceBetween={10}
                      loop={true}
                      grabCursor="true"
                      speed={1000}
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        reverseDirection: true,
                      }}
                      className="mySwiper2 d-height"
                    >
                      {movieData.slice(59, 63).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-dmovie-slide">
                            <Link href={`/movie-details/${item.id}`}>
                              <Image
                                src={item.image}
                                alt="img"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      slidesPerView={3}
                      spaceBetween={10}
                      loop={true}
                      grabCursor="true"
                      speed={1000}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      className="mySwiper3 d-height"
                    >
                      {movieData.slice(63, 67).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-dmovie-slide">
                            <Link href={`/movie-details/${item.id}`}>
                              <Image
                                src={item.image}
                                alt="img"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      slidesPerView={3}
                      spaceBetween={10}
                      loop={true}
                      grabCursor={true}
                      speed={1000}
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        reverseDirection: true,
                      }}
                      className="mySwiper4 d-height"
                    >
                      {movieData.slice(67, 71).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-dmovie-slide">
                            <Link href={`/movie-details/${item.id}`}>
                              <Image
                                src={item.image}
                                alt="img"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
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
    </>
  );
};

export default MovieSliderSeven;
