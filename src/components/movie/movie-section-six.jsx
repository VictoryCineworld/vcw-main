import Link from "next/link";
import React from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import FiltredMovieArea from "./filtred-movie-area";
import movieCategory from "@data/movie-category-data";
import NiceSelect from "@ui/niceSelect";

const MovieSectionSix = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const [categorys, setCategorys] = useState("");
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };
  const selectHandler = (e) => { };
  return (
    <>
      <div className="fm-landing-filter-movies-area bg-common-black padding-gap">
        <div className="container">
          <div className="row g-5 section-title-spacing-small wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-xl-6 col-lg-6 col-md-7 col-sm-6">
              <h4 className="fm-landing-section-title text-white fade_bottom_5">
                Movies for You
              </h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6">
              <div className="fm-landing-filter-option-wrapper fm-landing-filter-option-wrapper-static fade_bottom_5 text-sm-end">
                <NiceSelect
                  options={movieCategory}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name="Select Subject"
                  setCategorys={setCategorys}
                />
                <Link href="/movie" className="fm-landing-filter-viewall">
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="landing-row">
            <FiltredMovieArea
              categorys={categorys}
              openVideoModal={openVideoModal}
            />
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

export default MovieSectionSix;
