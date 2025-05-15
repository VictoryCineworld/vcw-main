import Image from "next/image";
import Link from "next/link";
import React from "react";

import teamImgOne from '@assets/img/team/f-1.jpg';
import teamImgTwo from '@assets/img/team/f-2.jpg';

const teamData = [
  {
    id: 1,
    teamImg: teamImgOne,
    director: 'Gaurav',
    designation: 'Founder',
    teamName: 'Gaurav Pawar',
    socialIcons: [
      {
        id: 1,
        icon: 'fa-brands fa-facebook-f',
        url: 'https://www.facebook.com/gaurav.pawar.3323',
      },
      {
        id: 3,
        icon: 'fa-brands fa-instagram',
        url: 'https://www.instagram.com/gauravcpawar?igsh=anFtOWV3c2Rnenpz',
      },
      {
        id: 4,
        icon: 'fa-brands fa-linkedin',
        url: 'https://www.linkedin.com/in/gaurav-pawar-635693141/',
      },
    ],
    delay: '0.3s'
  },
  {
    id: 2,
    teamImg: teamImgTwo,
    director: 'Gunjan',
    designation: 'Founder',
    teamName: 'Gunjan Kela',
    socialIcons: [
      {
        id: 1,
        icon: 'fa-brands fa-facebook-f',
        url: 'https://www.facebook.com/gunjan.kela.31?rdid=DFPlPVaOggAjKt86&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12CriheHp2r%2F',
      },
      {
        id: 3,
        icon: 'fa-brands fa-instagram',
        url: 'https://www.instagram.com/gunjankelaa/',
      },
      {
        id: 4,
        icon: 'fa-brands fa-linkedin',
        url: 'https://www.linkedin.com/in/gunjan-kela-674a5b286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    ],
    delay: '0.4s'
  }
];

const TeamSectionTwo = ({ teamBottomBorder }) => {
  return (
    <>
      <div className="fm-director-team-area team-softhalf-bg team__animation section-spacing fix">
        <div className="container">
          <div
            className="row section-title-spacing wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-xl-12">
              <div className="section-title text-center">
                <span className="section-subtitle title-anim">
                  WINNING AWARD
                </span>
                <div>
                  <h2 className="section-main-title title-anim">
                    MEET OUR TEAM
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Center the team items when fewer than 4 */}
          <div className="row gx-50 gy-50 justify-content-center">
            {teamData.map((item) => (
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
                      alt={`${item.teamName}'s photo`}
                    />
                    <span className="fm-director-sign">{item.director}</span>
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
                      {item.socialIcons.map((social) => (
                        <Link key={social.id} href={social.url} target="_blank">
                          <i className={social.icon}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {teamBottomBorder && (
        <div className="container">
          <div className="hr1"></div>
        </div>
      )}
    </>
  );
};

export default TeamSectionTwo;
