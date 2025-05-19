import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import { videoTestimonials } from "./data";
import Image from "next/image";
import SliderArrowLeft from "@assets/img/portfolio/slider-arrow-left.svg";
import SliderArrowRight from "@assets/img/portfolio/slider-arrow-right.svg";

const TestimonialSlider = () => {
  const swiperRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slideNext();
      const nextIndex = (currentVideoIndex + 1) % videoTestimonials.length;
      setCurrentVideoIndex(nextIndex);
    }
  };

  return (
    <section className="bg-black section-spacing text-white">
      <div className="container">
        <div className="col-12">
          <div className="fm-director-sec-title text-center">
            <span className="section-subtitle title-anim">Testimonials</span>
            <div>
              <h2 className="section-main-title text-white title-anim featured-work-title pb-5">
                Hear from our Customers
              </h2>
            </div>
          </div>
        </div>

        <div className="row" style={{ height: "500px" }}>
          {/* Video Slider full width now */}
          <div className="col-lg-12 h-100 position-relative">
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              loop={true}
              slidesPerView={1}
              pagination={{ clickable: true, el: ".testimonial-pagination" }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              navigation={{
                nextEl: ".fm-film-testimonial-next",
                prevEl: ".fm-film-testimonial-prev",
              }}
              className="rounded overflow-hidden h-100"
              onSlideChange={(swiper) => setCurrentVideoIndex(swiper.realIndex)}
            >
              {videoTestimonials.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <video
                      key={index} // force reloading video on slide change
                      autoPlay
                      muted
                      playsInline
                      controls={false}
                      onEnded={handleVideoEnded}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
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
                <Image
                  src={SliderArrowLeft}
                  style={{ width: "100%", height: "auto" }}
                  alt="icon"
                />
                Prev{" "}
              </span>
            </div>

            {/* Pagination dots */}
            <div className="col-lg-6 order-lg-1 pt-5">
              <div className="testimonial-pagination circle-dot-pagination fade_bottom_2"></div>
            </div>
          </div>

          {/* Text testimonial slider removed */}
        </div>
      </div>

      <style jsx>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #fff;
        }

        @media (max-width: 768px) {
          .row {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
