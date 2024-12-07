import movieData from '@data/movie-data';
import React from 'react';
//swipper
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { cart_product } from 'src/redux/features/cart-slice';


const ShopMovieSlider = () => {
  const dispatch = useDispatch();
  return (
    <div className="shop-product-related-wrapper wow fadeInUp" data-wow-delay="0.3s">
      <div className="row g-5 align-items-end section-title-spacing">
        <div className="col-lg-8">
          <div className="section__title-wrapper">
            <span className="section-subtitle">PRODUCTS</span>
            <h2 className="section-main-title">Related Films</h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="film-slider-btn d-flex justify-content-lg-end">
            <div className="film-slider-button-prev slider-nav-btn">
              <Link href="">
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>
            <div className="film-slider-button-next slider-nav-btn">
              <Link href="">
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" related-film-active">
        <div>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            loop={true}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".film-slider-button-next",
              prevEl: ".film-slider-button-prev",
            }}

            // Responsive breakpoints
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
          >
            {movieData?.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="fm-shop-product text-center">
                  <div className="fm-shop-product-img">
                    <Link href={`/shop-details/${item.id}`}>
                      <Image
                        src={item.image}
                        style={{ width: "100%", height: "auto" }}
                        alt="img"
                      />
                    </Link>
                    <button onClick={() => dispatch(cart_product(item))} className="add_to_cart_button">
                      <i className="fa-light fa-cart-shopping"></i>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                  <div className="fm-shop-product-content shop-content-bg">
                    <div className="fm-shop-product-rating">
                      {item?.retings?.map((item) => (
                        <i className={item.icon} key={item.id}></i>
                      ))}
                    </div>
                    <h4 className="fm-shop-product-title">
                      <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
                    </h4>
                    <span className="fm-shop-price">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ShopMovieSlider;