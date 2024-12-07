import React from 'react';
//swipper
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import movieData from '@data/movie-data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const MovieSliderEight = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [videoUrl, setVideoUrl] = useState(" ")
   const openVideoModal = (id) => {
      setIsOpen(!isOpen)
      setVideoUrl(id)
   }
   return (
      <>
         <section className="featured-area section-spacing featured-full-width p-relative">
            <div className="container">
               <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
                  <div className="col-12">
                     <div className="section-title text-center">
                        <span className="section-subtitle featured-sub-title title-anim">FEATURED PRODUCTION</span>
                        <div>
                           <h2 className="section-main-title featured-sec-title-2 featured-clr title-anim">The featured
                              production </h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="featured-wrapper-2 featured-slider-wrapper wow fadeInUp" data-wow-delay="0.4s">
                  <Swiper
                     modules={[Autoplay, Pagination, Navigation]}
                     spaceBetween={30}
                     loop={true}
                     centeredSlides={false}
                     observeParents={true}
                     observer={true}
                     autoplay={{
                        delay: 300000,
                        pauseOnMouseEnter: true,
                     }}
                     pagination={{
                        el: ".product-pagination",
                        clickable: true,
                     }}
                     navigation={{
                        nextEl: ".featured-slider-button-next",
                        prevEl: ".featured-slider-button-prev",
                     }}
                     className="featured-active"
                     // Responsive breakpoints
                     breakpoints={{
                        576: {
                           slidesPerView: 1,
                        },
                        768: {
                           slidesPerView: 2,
                        },
                        992: {
                           slidesPerView: 3,
                        },
                        1200: {
                           slidesPerView: 3,
                        },
                        1400: {
                           slidesPerView: 3,
                        },
                     }}
                  >
                     {
                        movieData.slice(71, 76).map((item) => (
                           <SwiperSlide key={item.id}>
                              <div>
                                 <div className="fm-single-featured">
                                    <div className="fm-featured-thumb">
                                       <Link href="/movie"><Image src={item?.image} style={{ width: '100%', height: 'auto' }} alt='img not found' /></Link>
                                    </div>
                                    <div className="fm-featured-content">
                                       <div className="fm-featured-content-inner">
                                          <Link href={`/movie-details/${item.id}`}>
                                             <h4 className="fm-featured-title">{item.title}</h4>
                                          </Link>
                                          <span className="fm-featured-meta">{item.releaseDate}</span>
                                       </div>
                                       <div className="fm-video-play">
                                          <button className="fm-featured-video-wrapper fm-featured-video-btn popup-video" onClick={() => { openVideoModal(item.videoUrl) }}><i
                                             className="fas fa-play"></i><span>Play Trailer</span></button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                        ))
                     }
                  </Swiper>

                  <div className="featured-slider-btn">
                     <div className="featured-slider-button-prev square-btn">
                        <i className="fal fa-angle-left"></i>
                     </div>
                     <div className="featured-slider-button-next square-btn">
                        <i className="fal fa-angle-right"></i>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <ModalVideo autoPlay isOpen={isOpen} videoId={videoUrl} onClose={() => setIsOpen(false)} />
      </>
   );
};

export default MovieSliderEight;