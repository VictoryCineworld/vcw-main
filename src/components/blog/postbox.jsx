import Pagination_Data from "@components/common/pagination/pagination-data";
import blogData from "@data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Postbox = () => {
  return (
    <div className="col-xxl-8 col-xl-7 col-lg-7">
      <div className="postbox__wrapper">
        {blogData &&
          blogData.slice(6, 9).map((item) => (
            <div className="postbox__item mb-60 wow fadeInUp" key={item.id}>
              <div className="postbox__thumb mb-30">
                <Link href={`/blog-details/${item.id}`}>
                  <Image
                    src={item.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </Link>
              </div>
              <div className="postbox__content">
                <div className="postbox__meta mb-20">
                  <span>
                    <Link href="#">{item.subTitle}</Link>
                  </span>
                  <span>{item.date}</span>
                </div>
                <h3 className="postbox__title ">
                  <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                </h3>
                <div className="postbox__text ">
                  <p>{item.description}</p>
                </div>
                <div className="col-xl-12">
                  <Link
                    href={`/blog-details/${item.id}`}
                    className="fm-submit-btn "
                  >
                    Read Blog post
                  </Link>
                </div>
              </div>
            </div>
          ))}
        <Pagination_Data />
      </div>
    </div>
  );
};

export default Postbox;
