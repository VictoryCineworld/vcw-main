import teamData from '@data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamSectionTwo = ({ teamBottomBorder }) => {
  return (
    <>
      <div className="fm-director-team-area team-softhalf-bg team__animation section-spacing fix">
        <div className="container">
          <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <span className="section-subtitle title-anim">
                  WINNING AWARD
                </span>
                <div>
                  <h2 className="section-main-title title-anim">
                    Meet my Team
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 gy-50">
            {teamData.slice(0, 4).map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item.id}
              >
                <div className="fm-director-team-single team__item">
                  <Link
                    className="fm-director-team"
                    href={`/team-details/${item.id}`}
                  >
                    <Image
                      src={item.teamImg}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                    <span className="fm-director-sign">Daniyel</span>
                  </Link>
                  <div className="fm-director-content">
                    <span className="fm-director-designation body-color">
                      {item.designation}
                    </span>
                    <h4 className="fm-director-name title-color">
                      <Link href={`/team-details/${item.id}`}>
                        {item.teamName}
                      </Link>
                    </h4>
                    <div className="fm-director-social">
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link href="https://twitter.com/" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link href="https://www.instagram.com/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link href="https://www.pinterest.com/" target="_blank">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {teamBottomBorder &&
        <div className="container">
          <div className="hr1"></div>
        </div>
      }
    </>
  );
};

export default TeamSectionTwo;