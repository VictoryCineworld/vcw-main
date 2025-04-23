import Image from "next/image";
import React from "react";
import imageOne from "@assets/img/objective/img-1.jpg";
import imageTwo from "@assets/img/objective/img-2.jpg";
import imageThree from "@assets/img/objective/img-3.jpg";
import imageFour from "@assets/img/objective/img-4.jpg";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import { PhotoProvider, PhotoView } from "react-photo-view";

const galary_data = [
  {
    id: 1,
    img: imageOne,
  },
  {
    id: 2,
    img: imageTwo,
  },
  {
    id: 3,
    img: imageThree,
  },
  {
    id: 4,
    img: imageFour,
  },
];

const GallarySection = () => {
  return (
    <section className="design-area wow fadeInUp" data-wow-delay="0.3s">
      <h4 className="case-subtitle">
        <span>
          <CaseSubtitleIcon />
        </span>
        Gallery
      </h4>
      <PhotoProvider>
        <div className="design-humb-grid ">
          {galary_data &&
            galary_data.map((item) => (
              <PhotoView key={item.id} src={item.img.src}>
                <div className="design-thumb img-tilt all__item-fade common-galary-icons">
                  <Image
                    src={item.img}
                    style={{ width: "100%", height: "auto" }}
                    alt="image not found"
                  />
                  <div className="common-galary-icon">
                    <i className="fal fa-plus fm-film-video-btn"></i>
                  </div>
                </div>
              </PhotoView>
            ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default GallarySection;

