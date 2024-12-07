import movieData from "@data/movie-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_product } from "src/redux/features/cart-slice";
import { selectProducts } from "src/redux/features/product-slice";

const Products = ({ keyword, categorys }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const filterdeMovie = movieData?.filter((movie) => movie.category === categorys)
  const filterData = movieData.slice(0, 12).filter((item) => {
    if (typeof keyword !== "string") {
      return false;
    }
    if (!item || !item.title || typeof item.title !== "string") {
      return false;
    }
    return item.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      {filterdeMovie.length > 0 ? (
        <>
          {
            <div className="fm-shop-content-wrapper">
              {filterdeMovie?.map((item) => (
                <div
                  className="fm-shop-product fade__anim-item text-center"
                  key={item.id}
                >
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
                  <div className="fm-shop-product-content ">
                    <div className="fm-shop-product-rating">
                      {item?.retings?.map((item) => (
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
              ))}
            </div>
          }
        </>
      ) : (
        <>
          {keyword === " " ? (
            <>
              <div className="fm-shop-content-wrapper">
                {movieData &&
                  movieData.slice(0, 12).map((item) => (
                    <div
                      className="fm-shop-product fade__anim-item text-center wow fadeInUp"
                      data-wow-delay={item.delay}
                      key={item.id}
                    >
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
                      <div className="fm-shop-product-content ">
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
                  ))}
              </div>
            </>
          ) : (
            <>
              {filterData.length > 0 ? (
                <>
                  <div className="fm-shop-content-wrapper">
                    {filterData &&
                      filterData?.map((item) => (
                        <div
                          className="fm-shop-product fade__anim-item  text-center"
                          key={item.id}
                        >
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
                          <div className="fm-shop-product-content ">
                            <div className="fm-shop-product-rating">
                              {item?.retings &&
                                item?.retings?.map((item) => (
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
                      ))}
                  </div>
                </>
              ) : (
                <>
                  <h2> No Movie Data Found {`" ${keyword} "`} Keyword </h2>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Products;
