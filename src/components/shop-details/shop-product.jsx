import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { cart_product, decrease_quantity } from "src/redux/features/cart-slice";

const ShopProduct = ({ item }) => {
  const dispatch = useDispatch()
  const { cartProducts } = useSelector(state => state.cart);
  const findProduct = cartProducts.find(i => Number(i?.id) === Number(item?.id))
  const handleChange = (e) => { }

  return (
    <div className="shop-product-details-portion wow fadeInUp" data-wow-delay="0.3s">
      <div div className="row g-50">
        <div className="col-xl-6 col-lg-6">
          <div className="shop-product-details-portion-wrapper">
            <div className="shop-details-thumb">
              {item.image && (
                <Image
                  src={item.image}
                  style={{ width: "100%", height: "auto" }}
                  data-speed="auto"
                  alt="shop-img"
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="shop-product-details-portion-content">
            <h4 className="shop-product-details-title">
              {item?.title && item.title}
            </h4>
            <span className="product-details-price d-inline-block">
              ${item?.price && item.price}
            </span>
            <div className="product-details-ratings-wrapper mb-30">
              <span className="product-details-ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="review-count">(2 Reviews)</span>
            </div>
            <div className="">
              <p className="mb-35">
                Bradford and its surrounding areas is Barnard’s artistic
                stomping ground, with three of her four features being
                conceived, workshopped and filmed in the diverse northern
                English city.
              </p>

              <div className="shop-cart-option mb-15">
                <div className="product-quantity mr-20">
                  <div className="p-relative">
                    <div className="product-quantity-form">
                      <form onSubmit={e => e.preventDefault()}>
                        <button onClick={() => dispatch(decrease_quantity(item))} className="cart-minus"><i className="far fa-minus"></i></button>
                        <input className="cart-input" type="text" onChange={handleChange}
                          value={findProduct?.quantity ? findProduct?.quantity : 0} />
                        <button className="cart-plus" onClick={() => dispatch(cart_product(item))}><i className="far fa-plus"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
                <Link href="/cart" className="border-btn">
                  Add to Cart
                </Link>
              </div>
            </div>

            <div className="shop-product-details-information border-topinfo mt-45 pt-35">
              <p>
                <span className="sku-value">
                  <span>SKU :</span> 254121
                </span>
              </p>
              <p>
                <span className="product-cat">
                  <span>Category :</span> <Link href="/movie">Short film</Link>
                </span>
              </p>
              <p>
                <span className="product-tag">
                  <span>Tags :</span> <Link href="#">Awards</Link>,{" "}
                  <Link href="#">Festival</Link>,{" "}
                  <Link href="/movie">Movie</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ShopProduct;
