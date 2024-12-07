import React from 'react';
import imageOne from '@assets/img/certificate/cer-1.jpg';
import imageTwo from '@assets/img/certificate/cer-2.jpg';
import imageThere from '@assets/img/certificate/cer-3.jpg';
import Image from 'next/image';
//swipper
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const CertificateSlider = () => {
   const certificateData = [
      {
         id: 1,
         image: imageOne
      },
      {
         id: 2,
         image: imageTwo
      },
      {
         id: 3,
         image: imageThere
      },
      {
         id: 4,
         image: imageOne
      },
      {
         id: 5,
         image: imageTwo
      },
      {
         id: 6,
         image: imageOne
      },
      {
         id: 7,
         image: imageTwo
      },
      {
         id: 8,
         image: imageThere
      },

   ]

   return (
      <div className="certificate-area section-spacing bg-common-black">
         <div className="container">
            <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
               <div className="col-12">
                  <div className="sec-sub">
                     <div className="section-title sec-sub-style  text-center">
                        <span className="section-subtitle">CERTIFICATION</span>
                        <div>
                           <h2 className="section-main-title text-white title-anim">Our Achievement
                           </h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="certificate-active wow fadeInUp" data-wow-delay="0.4s">
               <div>
                  <Swiper
                     modules={[Navigation, Autoplay]}
                     spaceBetween={30}
                     loop={true}
                     observeParents={true}
                     observer={true}
                     navigation={{
                        nextEl: ".fm-slider-next",
                        prevEl: ".fm-slider-prev",
                     }}
                     autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                     }}
                     // Responsive breakpoints
                     breakpoints={{
                        450: {
                           slidesPerView: 2,
                        },
                        576: {
                           slidesPerView: 2,
                        },
                        768: {
                           slidesPerView: 3,
                        },
                        991: {
                           slidesPerView: 3,
                        },
                        1200: {
                           slidesPerView: 4,
                        },
                        1400: {
                           slidesPerView: 4,
                        },
                     }}
                  >
                     {
                        certificateData.map((item) => (
                           <SwiperSlide key={item.id}>
                              <div className="certificate-img">
                                 <Image src={item.image} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                              </div>
                           </SwiperSlide>
                        ))
                     }
                  </Swiper>
               </div>
            </div>
            <div className="fm-slider-navigation mt-50 wow fadeInUp" data-wow-delay="0.3s">
               <span className="fm-slider-prev slider-nav-btn"><i className="fa-solid fa-arrow-left-long"></i></span>
               <span className="fm-slider-next slider-nav-btn"><i className="fa-solid fa-arrow-right-long"></i></span>
            </div>
         </div>
      </div>
   );
};

export default CertificateSlider;