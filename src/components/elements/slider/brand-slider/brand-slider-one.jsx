import React, { useRef } from "react";
import brandData from "@data/brand-data";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const BrandAreaSection = ({ brandWrapperClass, borderClass }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className={`${
        brandWrapperClass
          ? brandWrapperClass
          : "brand-area pt-[1px] pb-5 bg-common-black"
      }`}
    >
      <div className="container position-relative">
        <Swiper
          modules={[Navigation]}
          loop={false}
          speed={1000}
          spaceBetween={30}
          grabCursor={true}
          keyboard={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
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
                  borderClass
                    ? borderClass
                    : "fm-brand is-white p-1 d-flex flex-column align-items-center text-center"
                }`}
              >
                <h2 className="text-white fw-bold mb-1 h2">{item.text}</h2>
                <p className="fs-4" style={{ color: "#A98A47" }}>
                  {item.subtitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows (Mobile only) at center bottom */}
        <div
          className="d-lg-none d-flex justify-center align-items-center gap-4 position-absolute"
          style={{
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <button
            ref={prevRef}
            className="arrow-button"
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <button
            ref={nextRef}
            className="arrow-button"
            aria-label="Next Slide"
          >
            &#8594;
          </button>
        </div>
      </div>

      <style jsx>{`
        .arrow-button {
          background-color: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          font-size: 20px;
          padding: 8px 12px;
          border-radius: 50%;
          transition: background-color 0.3s ease;
        }

        .arrow-button:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        @media (min-width: 992px) {
          .arrow-button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandAreaSection;
