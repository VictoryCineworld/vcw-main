import blogData from "@data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="sidebar__widget ">
      <h3 className="sidebar__widget-title mb-30">Top Stories</h3>
      <div className="sidebar__widget-content">
        <div className="sidebar__post">
          {blogData &&
            blogData.slice(9, 13).map((item) => (
              <div className="rc__post" key={item.id}>
                <div className="rc__post-thumb">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      src={item.image}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h5 className="rc__post-title">
                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                  </h5>
                  <div className="postbox__meta">
                    <span>
                      <Link href="#">{item.subTitle}</Link>
                    </span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
