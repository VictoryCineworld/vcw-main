import Link from "next/link";
import React from "react";
import SidebarContent from "./sidebar-content";
import DetailsBox from "./details-box";
import movieData from "@data/movie-data";
import Image from "next/image";

const MovieDetailsArea = ({ item }) => {
  return (
    <>
      <div className="fm-movie-details-area soft-greybg section-spacing">
        <div className="container">
          <div className="row g-5 mb-30">
            <div className="col-xl-4 col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
              <SidebarContent item={item} />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
              <DetailsBox item={item} />
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12">
              <div className="fm-movie-sidebar-wrapper">
                <div className="fm-movie-sidebar-widget">
                  <div className="fm-movie-sidebar-heading-section d-flex justify-content-between align-items-center mb-35">
                    <h4 className="fm-movie-sidebar-heading title-color mb-0">
                      Recommended
                    </h4>
                  </div>
                  <div className="fm-movie-sidebar-inner">
                    {movieData.slice(24, 32).map((item) => (
                      <div className="fm-movie-sidebar-post-single" key={item.id}>
                        <div className="fm-movie-sidebar-post-single-img">
                          <Link href={`/movie-details/${item.id}`}>
                            <Image
                              src={item.image}
                              style={{ width: "100%", height: "auto" }}
                              alt="img not found"
                            />
                          </Link>
                        </div>
                        <div className="fm-landing-trending-content-text">
                          <h4 className="fm-landing-trending-content-title title-color">
                            <Link href={`/movie-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <span className="fm-landing-trending-rating">
                            {item.rettings.map((item) => (
                              <i className={item.icon} key={item.id}></i>
                            ))}
                          </span>
                          <div className="fm-landing-trending-meta-wrapper">
                            <span className="fm-landing-trending-meta">
                              {item.tradingTime}
                            </span>
                            <span className="fm-landing-trending-meta">
                              {item.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsArea;
