import PortfolioData from "@data/portfolio-data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const PortfolioMasonaryArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };
  return (
    <>
      <div className="fm-films-wrapper section-spacing bg-common-black">
        <div className="container">
          <div className="gallery-grid wow fadeInUp" data-wow-delay="0.3s">
            <div className="row g-5">
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 grid-item">
                {PortfolioData.slice(16, 17).map((item) => (
                  <div className="fm-films-single fade_bottom fm-film-dark-overlay" key={item.id}>
                    <div className="fm-films-img">
                      <div className="fm-films-inner-content">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="img"
                          />
                        </Link>
                        <div className="fm-films-text">
                          <span className="fm-films-date">{item.date}</span>
                          <h4 className="fm-films-video-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <div className="fm-films-video-rating">
                            <span className="fm-films-rating">
                              {item.ratings.map((item) => (
                                <i
                                  className="fa-thin fa-star"
                                  key={item.id}
                                ></i>
                              ))}
                            </span>
                            <span className="fm-films-rating-count">
                              {item.ratingCount}
                            </span>
                          </div>
                        </div>
                        <div className="fm-films-video-button">
                          <button
                            className="fm-film-video-btn popup-video"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fa-thin fa-play"></i>
                            <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 grid-item second-item-no-margin">
                {PortfolioData.slice(17, 19).map((item) => (
                  <div
                    className="fm-films-single fade_bottom mb-5 fm-film-dark-overlay"
                    key={item.id}
                  >
                    <div className="fm-films-img">
                      <div className="fm-films-inner-content">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="img"
                          />
                        </Link>
                        <div className="fm-films-text">
                          <span className="fm-films-date">{item.title}</span>
                          <h4 className="fm-films-video-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <div className="fm-films-video-rating">
                            <span className="fm-films-rating">
                              {item.ratings.map((item) => (
                                <i
                                  className="fa-thin fa-star"
                                  key={item.id}
                                ></i>
                              ))}
                            </span>
                            <span className="fm-films-rating-count">
                              {item.ratingCount}
                            </span>
                          </div>
                        </div>
                        <div className="fm-films-video-button">
                          <button
                            className="fm-film-video-btn popup-video"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fa-thin fa-play"></i>
                            <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                            </svg>
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 grid-item">
                {PortfolioData.slice(19, 20).map((item) => (
                  <div className="fm-films-single fade_bottom fm-film-dark-overlay" key={item.id}>
                    <div className="fm-films-img">
                      <div className="fm-films-inner-content">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="img"
                          />
                        </Link>
                        <div className="fm-films-text">
                          <span className="fm-films-date">{item.date}</span>
                          <h4 className="fm-films-video-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <div className="fm-films-video-rating">
                            <span className="fm-films-rating">
                              {item.ratings.map((item) => (
                                <i
                                  className="fa-thin fa-star"
                                  key={item.id}
                                ></i>
                              ))}
                            </span>
                            <span className="fm-films-rating-count">
                              {item.ratingCount}
                            </span>
                          </div>
                        </div>
                        <div className="fm-films-video-button">
                          <button
                            className="fm-film-video-btn popup-video"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fa-thin fa-play"></i>
                            <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 grid-item">
                {PortfolioData.slice(20, 21).map((item) => (
                  <div className="fm-films-single fade_bottom fm-film-dark-overlay" key={item.id}>
                    <div className="fm-films-img">
                      <div className="fm-films-inner-content">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "100%", height: "100%" }}
                            alt="img"
                          />
                        </Link>
                        <div className="fm-films-text">
                          <span className="fm-films-date">{item.date}</span>
                          <h4 className="fm-films-video-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <div className="fm-films-video-rating">
                            <span className="fm-films-rating">
                              {item.ratings.map((item) => (
                                <i
                                  className="fa-thin fa-star"
                                  key={item.id}
                                ></i>
                              ))}
                            </span>
                            <span className="fm-films-rating-count">
                              {item.ratingCount}
                            </span>
                          </div>
                        </div>
                        <div className="fm-films-video-button">
                          <button
                            className="fm-film-video-btn popup-video"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fa-thin fa-play"></i>
                            <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 grid-item">
                {PortfolioData.slice(21, 22).map((item) => (
                  <div className="fm-films-single fade_bottom fm-film-dark-overlay" key={item.id}>
                    <div className="fm-films-img">
                      <div className="fm-films-inner-content">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "100%", height: "100%" }}
                            alt="img"
                          />
                        </Link>
                        <div className="fm-films-text">
                          <span className="fm-films-date">{item.date}</span>
                          <h4 className="fm-films-video-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <div className="fm-films-video-rating">
                            <span className="fm-films-rating">
                              {item.ratings.map((item) => (
                                <i
                                  className="fa-thin fa-star"
                                  key={item.id}
                                ></i>
                              ))}
                            </span>
                            <span className="fm-films-rating-count">
                              {item.ratingCount}
                            </span>
                          </div>
                        </div>
                        <div className="fm-films-video-button">
                          <button
                            className="fm-film-video-btn popup-video"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fa-thin fa-play"></i>
                            <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 grid-item">
                {PortfolioData.slice(22, 23).map((item) => (
                  <div className="fm-films-single fade_bottom fm-film-dark-overlay" key={item.id}>
                    <div className="fm-films-img">
                      <div className="fm-films-inner-content">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="img"
                          />
                        </Link>
                        <div className="fm-films-text">
                          <span className="fm-films-date">{item.date}</span>
                          <h4 className="fm-films-video-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <div className="fm-films-video-rating">
                            <span className="fm-films-rating">
                              {item.ratings.map((item) => (
                                <i
                                  className="fa-thin fa-star"
                                  key={item.id}
                                ></i>
                              ))}
                            </span>
                            <span className="fm-films-rating-count">
                              {item.ratingCount}
                            </span>
                          </div>
                        </div>
                        <div className="fm-films-video-button">
                          <button
                            className="fm-film-video-btn popup-video"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fa-thin fa-play"></i>
                            <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 grid-item">
                {PortfolioData.slice(23, 24).map((item) => (
                  <div className="fm-films-single fade_bottom fm-film-dark-overlay" key={item.id}>
                    <div className="fm-films-img">
                      <div className="fm-films-inner-content">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="img"
                          />
                        </Link>
                        <div className="fm-films-text">
                          <span className="fm-films-date">{item.date}</span>
                          <h4 className="fm-films-video-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <div className="fm-films-video-rating">
                            <span className="fm-films-rating">
                              {item.ratings.map((item) => (
                                <i
                                  className="fa-thin fa-star"
                                  key={item.id}
                                ></i>
                              ))}
                            </span>
                            <span className="fm-films-rating-count">
                              {item.ratingCount}
                            </span>
                          </div>
                        </div>
                        <div className="fm-films-video-button">
                          <button
                            className="fm-film-video-btn popup-video"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fa-thin fa-play"></i>
                            <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 grid-item">
                {PortfolioData.slice(24, 25).map((item) => (
                  <div className="fm-films-single fade_bottom fm-film-dark-overlay" key={item.id}>
                    <div className="fm-films-img">
                      <div className="fm-films-inner-content">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "auto", height: "auto" }}
                            alt="img"
                          />
                        </Link>
                        <div className="fm-films-text">
                          <span className="fm-films-date">{item.date}</span>
                          <h4 className="fm-films-video-title">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <div className="fm-films-video-rating">
                            <span className="fm-films-rating">
                              {item.ratings.map((item) => (
                                <i
                                  className="fa-thin fa-star"
                                  key={item.id}
                                ></i>
                              ))}
                            </span>
                            <span className="fm-films-rating-count">
                              {item.ratingCount}
                            </span>
                          </div>
                        </div>
                        <div className="fm-films-video-button">
                          <button
                            className="fm-film-video-btn popup-video"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fa-thin fa-play"></i>
                            <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12">
              <div className="fm-films-more-button text-center mt-50 bdFadeBottom">
                <Link href="/movie" className="border-btn is-white">
                  More Films
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        autoPlay
        isOpen={isOpen}
        videoId={videoUrl}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default PortfolioMasonaryArea;
