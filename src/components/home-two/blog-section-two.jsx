import blogData from "@data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSectionTwo = () => {
  return (
    <section className="blog-area section-spacing bg-common-black">
      <div className="container">
        <div className="row align-items-end g-5 section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-8 col-md-8">
            <div className="blog-sec-wrapper">
              <div className="section-title">
                <span className="section-subtitle title-anim 'featured-sub-title">
                  LATEST NEWS
                </span>
                <h2 className="section-main-title title-anim text-white">
                  VictoryCineworld Latest Blog
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className=" blog-btn d-flex justify-content-md-end fade_bottom_3">
              <Link href='/blog' className="border-btn is-white">
                View All
                <span >
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="fm-blog-wrapper is-white">
            {blogData.slice(0, 3).map((item) => (
              <div
                className="fm-blog-inner blog__animation-wrapper is-white wow fadeInUp"
                data-wow-delay={item.delay}
                key={item.id}
              >
                <div className="fm-blog-thumb">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      src={item.image}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                </div>
                <div className="fm-blog-content blog__content ">
                  <div className="fm-blog-content-text">
                    <div className="fm-blog-meta">
                      <span>{item.date}</span>
                    </div>
                    <h4 className="fm-blog-title text-white">
                      <Link href={`/blog-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <div className="fm-blog-text">
                      <p className="">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="fm-featured-btn btn_wrapper ">
                  <Link
                    href={`/blog-details/${item.id}`}
                    className="blog-rotate-btn btn__item-move is-black"
                  >
                    <span>
                      <i className="flaticon-right-arrow-1 is-white"></i>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionTwo;
