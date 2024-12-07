import movieData from "@data/movie-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarMovie = () => {
  return (
    <div className="fm-widget-top-product-list-1-6">
      {movieData.slice(12, 17).map((item) => (
        <div className="fm-widget-top-product-single-1-6 mb-20" key={item.id}>
          <div className="fm-shop-thumb">
            <Link href={`/shop-details/${item.id}`}>
              <Image
                src={item.image}
                style={{ width: "100%", height: "auto" }}
                alt="img"
              />
            </Link>
          </div>
          <div className="fm-widget-top-product-content-1-6">
            <h4 className="fm-product-box-title-1-6">
              <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
            </h4>
            <div className="fm-product-box-price-1-6">
              <span>
                <ins>${item.price}</ins>
                {item?.old_price && <del>${item.old_price}</del>}
              </span>
            </div>
            <div className="fm-rating pt-4-px">
              {item.retings.map((item) => (
                <i key={item.id} className={item.icon}></i>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarMovie;
