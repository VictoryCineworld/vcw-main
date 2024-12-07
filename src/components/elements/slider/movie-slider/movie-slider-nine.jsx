import Link from "next/link";
import React from "react";
//swipper
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import blogData from "@data/blog-data";

const MovieSliderNine = () => {
  return (
    <div className="postbox__blog pt-60">
      <div className="row wow fadeInUp">
        <div className="col-12">
          <div className="fm-blog-slide-wrapper">
            <div className="section__title-wrapper">
              <h2 className="section-main-title">You may also like</h2>
            </div>
            <div className="blog-slider-btn">
              <div className="blog-slider-button-prev square-btn">
                <Link href="">
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
              </div>
              <div className="blog-slider-button-next square-btn">
                <Link href="">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-active">
          <div>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              loop={true}
              observer={true}
              observeParents={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: ".blog-slider-button-next",
                prevEl: ".blog-slider-button-prev",
              }}
              // Responsive breakpoints
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2,
                },
              }}
            >
              {blogData &&
                blogData.slice(13, 15).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="blogpost-box-3 mb-30">
                      <span className="tag">{item.category}</span>
                      <div className="blogpost-box-3__thumb-content-wrapper">
                        <div className="blogpost-box-3__thumb">
                          <Link href={`/blog-details/${item.id}`}>
                            <Image
                              src={item.image}
                              style={{ width: "100%", height: "auto" }}
                              alt="img not found"
                            />
                          </Link>
                        </div>
                        <div className="blogpost-box-3__content">
                          <h4 className="blogpost-title">
                            <Link href={`/blog-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                      <div className="blogpost-date">{item.date}</div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSliderNine;
