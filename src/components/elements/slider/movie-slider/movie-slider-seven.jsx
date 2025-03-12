import movieData from "@data/movie-data";
import React from "react";
// swiper
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Link from "next/link";
import Image from "next/image";
import serviceData from "@data/service-data";

const MovieSliderSeven = () => {
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <section className="soft-blackbg relative" style={{ position: "relative" }}>
      <div
        className="fm-landing-download-movies-area section-spacing-bottom container"
        style={{ position: "relative" }}
      >
        <div className="container">
          {/* Left Column: Service Data */}
          <div className="col-md-8">
            <div className="fm-director-service-wrapper section-spacing">
              <div className="row wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-12">
                  <div className="fm-director-service-title">
                    <span className="section-subtitle title-anim">
                      SERVICES
                    </span>
                    <h2 className="section-main-title text-white title-anim mb-55">
                      Solutions We Provide
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row g-5 gy-50">
                {serviceData.slice(0, 4).map((item) => (
                  <div
                    className="col-xl-6 col-sm-6 wow fadeInUp"
                    data-wow-delay={item.delay}
                    key={item.id}
                  >
                    <div className="fm-director-service-single fade_bottom">
                      <Image
                        src={item.image}
                        style={{ width: "auto", height: "auto" }}
                        alt="img not found"
                      />
                      <h4 className="fm-director-service-title">
                        <Link href="/service">{item.title}</Link>
                      </h4>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                        style={{ maxWidth: "100%" }}
                      ></p>
                      <Link
                        href={`/service-details/${item.id}`}
                        className="fm-director-service-btn arrow-effect"
                      >
                        View Details{" "}
                        <span>
                          <i className="fa-light fa-arrow-right-long"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
        className="d-none d-md-flex"
      >
        <div
          className="fm-landing-download-movies-wrapper-section"
          style={{ height: "100%" }}
        >
          <div className="fix" style={{ height: "100%" }}>
            <div
              className="fm-landing-download-movies-flex justify-content-lg-end"
              style={{
                display: "flex",
                transform: "rotate(-15deg)",
                marginRight: "-150px",
                height: "100%",
              }}
            >
              {/* Swiper 1 - Moves UP */}
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                speed={1000}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                className="mySwiper1 d-height"
                style={{ height: "130%", marginTop: "-100px" }}
              >
                {shuffleArray([...movieData.slice(55, 65)]).map((item) => (
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

              {/* Swiper 2 - Moves DOWN */}
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                speed={1000}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  reverseDirection: true, // Moves downward
                }}
                className="mySwiper1 d-height"
                style={{ height: "130%", marginTop: "-70px" }}
              >
                {shuffleArray([...movieData.slice(55, 65)]).map((item) => (
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

              {/* Swiper 3 - Moves UP */}
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                speed={1000}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                className="mySwiper1 d-height"
                style={{ height: "130%", marginTop: "-100px" }}
              >
                {shuffleArray([...movieData.slice(55, 65)]).map((item) => (
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

              {/* Swiper 4 - Moves DOWN */}
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                speed={1000}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  reverseDirection: true, // Moves downward
                }}
                className="mySwiper1 d-height"
                style={{ height: "130%", marginTop: "-100px" }}
              >
                {shuffleArray([...movieData.slice(55, 65)]).map((item) => (
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
    </section>
  );
};

export default MovieSliderSeven;
