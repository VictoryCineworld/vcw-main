import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import { Star } from "lucide-react";
import Image from "next/image";
import { User } from "lucide-react";
import { textTestimonials, videoTestimonials } from "./data";
import SliderArrowLeft from "@assets/img/portfolio/slider-arrow-left.svg";
import SliderArrowRight from "@assets/img/portfolio/slider-arrow-right.svg";
const TestimonialSlider = () => {
  return (
    <section className="bg-black section-spacing text-white">
      <div className="container">
      <div className="col-12">
                  <div className="fm-director-sec-title text-center">
                     <span className="section-subtitle title-anim">Testimonials</span>
                     <div>
                        <h2 className="section-main-title text-white title-anim featured-work-title pb-5">Hear from our Customers</h2>
                     </div>
                  </div>
               </div>

        {/* Enforce a fixed height on the row so both columns match */}
        <div className="row" style={{ height: "500px" }}>
          {/* Left column (video) */}
          <div className="col-lg-8 mb-4 mb-lg-0 h-100 position-relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              loop={true}
              slidesPerView={1}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".testimonial-pagination" }}
              className="rounded overflow-hidden h-100"
              navigation={{
                nextEl: ".fm-film-testimonial-next",
                prevEl: ".fm-film-testimonial-prev",
              }}
            >
              {videoTestimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  {/* 
                    Remove ratio-16x9; force video to fill parent via 
                    width: 100% and height: 100% 
                  */}
                  <div style={{ width: "100%", height: "100%" }}>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover" 
                      }}
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
            {/* Pagination dots */}
            <div className="col-lg-6 order-lg-1 pt-5">
              <div className="testimonial-pagination circle-dot-pagination fade_bottom_2"></div>
            </div>
          </div>

          {/* Right column (scrolling text) */}
          <div className="col-lg-4 h-100">
            <div
              className="position-relative overflow-hidden h-100"
              id="testimonialMarquee"
            >
              <div className="position-absolute w-100" id="marqueeContent">
                {Array(3)
                  .fill(textTestimonials)
                  .flat()
                  .map((item, index) => (
                    <div key={index} className="client-wrapper"
                    style={{
                      margin:"50px 0px"
                    }}
                    >
                      <div className="client-content">
                        <div className="client-name">
                          <div className="client-img">
                            <div className="avatar">
                              {item.author
                                .split(" ")
                                .map((word) => word[0])
                                .join("")}
                            </div>
                          </div>
                          <div className="client-text">
                            <h4>{item.author}</h4>
                            <span>{item.subTitle}</span>
                          </div>
                        </div>
                        <p>{item.description}</p>
                        {/* If you want rating stars:
                        <div className="d-flex">
                          {[...Array(item.ratings)].map((_, i) => (
                            <Star
                              key={i}
                              className="text-warning"
                              fill="#a98a47"
                              color="#a98a47"
                            />
                          ))}
                        </div> 
                        */}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Marquee animation */
        #marqueeContent {
          animation: marquee 80s linear infinite;
          top: 0;
        }
        @keyframes marquee {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        /* Swiper Pagination */
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

        /* Avatar style */
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #a98a47;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .row {
            height: auto; /* Let it adjust on smaller screens if needed */
          }
          #testimonialMarquee {
            height: 300px;
          }
          #marqueeContent {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
