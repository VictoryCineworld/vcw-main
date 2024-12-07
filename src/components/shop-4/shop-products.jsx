import movieData from "@data/movie-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { cart_product } from "src/redux/features/cart-slice";

const ShopProducts = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="fm-shop-wide-area section-spacing shop-bg">
        <div className="container">
          <div className="fade_animation">
            <div className="row g-5 row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
              {movieData.slice(0, 12).map((item) => (
                <div className="col wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                  <div className="fm-shop-product text-center fade__anim-item">
                    <div className="fm-shop-product-img">
                      <Link href={`/shop-details/${item.id}`}>
                        <Image
                          src={item.image}
                          style={{ width: "100%", height: "auto" }}
                          alt="img"
                        />
                      </Link>
                      <button
                        onClick={() => dispatch(cart_product(item))}
                        className="add_to_cart_button"
                      >
                        <i className={item.icon}></i>
                        <span>Add To Cart</span>
                      </button>
                    </div>
                    <div className="fm-shop-product-content">
                      <div className="fm-shop-product-rating">
                        {item.retings.map((item) => (
                          <i key={item.id} className={item.icon}></i>
                        ))}
                      </div>
                      <h4 className="fm-shop-product-title">
                        <Link href={`/shop-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <span className="fm-shop-price">
                        <ins>${item.price}</ins>
                        {item?.old_price && <del>${item.old_price}</del>}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fm-shop-content-more-btn text-center mt-50 bdFadeBottom">
            <Link href="/movie" className="border-btn">
              Load More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
