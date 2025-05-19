import React, { useRef, useState, useEffect } from "react";
import brandData from "@data/brand-data";
// Swiper imports
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const BrandAreaSection = ({ brandWrapperClass, borderClass }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Update swiper navigation when refs are ready
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy(); // destroy old navigation
      swiperInstance.navigation.init();    // init new navigation
      swiperInstance.navigation.update();  // update navigation
    }
  }, [swiperInstance]);

  return (
    <div
      className={`${
        brandWrapperClass ? brandWrapperClass : "brand-area section-spacing bg-common-black"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
            <div className="brand-active position-relative">
              <Swiper
                modules={[Navigation]}
                direction="horizontal"
                loop={false}
                speed={1000}
                spaceBetween={30}
                centeredSlides={false}
                grabCursor={true}
                keyboard={true}
                onSwiper={setSwiperInstance}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
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
                      <h2 className="text-white fw-bold mb-1 h2">{item.text}</h2>
                      <p className="fs-4" style={{ color: "#A98A47" }}>{item.subtitle}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mobile only arrows */}
              <div
                className="d-lg-none d-flex justify-content-between mt-3 position-absolute w-100 px-3"
                style={{ bottom: "-50px", left: 0 }}
              >
                <button
                  ref={prevRef}
                  className="btn btn-outline-light"
                  aria-label="Previous Slide"
                >
                  &#8592; {/* left arrow */}
                </button>
                <button
                  ref={nextRef}
                  className="btn btn-outline-light "
                  aria-label="Next Slide"
                >
                  &#8594; {/* right arrow */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide arrows on desktop */
        @media (min-width: 992px) {
          .btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandAreaSection;
