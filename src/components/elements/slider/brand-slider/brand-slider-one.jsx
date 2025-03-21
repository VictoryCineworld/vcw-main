import React from "react";
import brandData from "@data/brand-data";
// Swiper imports
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const BrandAreaSection = ({ brandWrapperClass, borderClass }) => {
  return (
    <div
      className={`${
        brandWrapperClass ? brandWrapperClass : "brand-area section-spacing bg-common-black"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
            <div className="brand-active">
              <Swiper
                modules={[Navigation]}
                direction="horizontal"
                loop={false}
                speed={1000}
                spaceBetween={30}
                centeredSlides={false}
                grabCursor={true}
                keyboard={true}
                navigation={{
                  nextEl: ".fm-brand-next",
                  prevEl: ".fm-brand-prev",
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  480: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                  1400: { slidesPerView: 4 },
                  1600: { slidesPerView: 4 },
                }}
              >
                {brandData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`${
                        borderClass ? borderClass : "fm-brand is-white p-4 d-flex flex-column align-items-center text-center"
                      }`}
                    >
                      <h2 className="text-white fw-bold mb-1 h2" >{item.text}</h2>
                      <p className="fs-4" style={{ color: "#A98A47" }}>{item.subtitle}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaSection;
