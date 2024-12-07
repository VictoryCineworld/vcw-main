import movieData from "@data/movie-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FiltredMovieArea = ({ categorys, openVideoModal }) => {
  const filterdeMovie = movieData.filter(
    (movie) => movie.category === categorys
  );

  return (
    <>
      {filterdeMovie.length > 0
        ? filterdeMovie?.map((item) => (
          <div className="landing-col" key={item.id}>
            <div className="fm-landing-trending-single">
              <div className="fm-landing-trending-single-img">
                <Link href={`/movie-details/${item.id}`}>
                  <Image
                    src={item.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </Link>
                <span className="fm-landing-trending-time">
                  {item.duration}
                </span>
                <button
                  onClick={() => {
                    openVideoModal(item.videoUrl);
                  }}
                  className="fm-trending-video-btn popup-video"
                >
                  <span>
                    <i className="fa-thin fa-play"></i>WATCH
                  </span>
                </button>
              </div>
              <div className="fm-landing-trending-content">
                <div className="fm-landing-trending-content-text">
                  <h4 className="fm-landing-trending-content-title">
                    <Link href={`/movie-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <span className="fm-landing-trending-rating">
                    {item?.rettings?.map((item) => (
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
                <div className="fm-landing-trending-content-bookmark">
                  <span className="fm-landing-trending-content-bookmark-icon">
                    <i className="flaticon-love"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
        : movieData.slice(20, 30).map((item) => (
          <div className="landing-col wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
            <div className="fm-landing-trending-single" >
              <div className="fm-landing-trending-single-img">
                <Link href={`/movie-details/${item.id}`}>
                  <Image
                    src={item.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </Link>
                <span className="fm-landing-trending-time">
                  {item.duration}
                </span>
                <button
                  onClick={() => {
                    openVideoModal(item.videoUrl);
                  }}
                  className="fm-trending-video-btn popup-video"
                >
                  <span>
                    <i className="fa-thin fa-play"></i>WATCH
                  </span>
                </button>
              </div>
              <div className="fm-landing-trending-content">
                <div className="fm-landing-trending-content-text">
                  <h4 className="fm-landing-trending-content-title">
                    <Link href={`/movie-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <span className="fm-landing-trending-rating">
                    {item?.rettings?.map((item) => (
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
                <div className="fm-landing-trending-content-bookmark">
                  <span className="fm-landing-trending-content-bookmark-icon">
                    <i className="flaticon-love"></i>
                  </span>
                </div>
              </div>
            </div>
          </div >
        ))}
    </>
  );
};

export default FiltredMovieArea;
