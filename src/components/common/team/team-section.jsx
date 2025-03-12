import teamData from '@data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamSection = () => {
   return (
      <div className="fm-director-team-area team__animation bg-common-black section-spacing fix">
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay="0.3s">
               <div className="col-xl-12">
                  <div className="fm-director-team-title text-center">
                     <span className="section-subtitle title-anim">EXPERT TEAM</span>
                     <div>
                        <h2 className="section-main-title text-white title-anim team-name-clr">MEET OUR TEAM</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div 
   className="row g-5 gy-50" 
   style={{ display: "flex", alignItems: "center", justifyContent: "center", gap:'180px' }}
>

               {
                  teamData.slice(0, 2).map((item) => (
                     <div 
                     className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp flex lg:pl-[200px] pl-0"
                     data-wow-delay={item.delay} 
                     key={item.id}
                  >
                   
                        <div className="fm-director-team-single team__item">
                           <Link href={`/team-details/${item.id}`} className="fm-director-team">
                              <Image src={item.teamImg} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                              <span className="fm-director-sign">{item.director}</span>
                           </Link>
                           <div className="fm-director-content">
                              <span className="fm-director-designation">{item.designation}</span>
                              <h4 className="fm-director-name">
                                 <Link href={`/team-details/${item.id}`} className="team-name-clr">
                                    {item.teamName}
                                 </Link>
                              </h4>
                              <div className="fm-director-social social-hov-clr">
                                 {item.socialIcons &&
                                    item.socialIcons.map((icon) => (
                                       <Link key={icon.id} href={icon.url} target="_blank">
                                          <i className={icon.icon}></i>
                                       </Link>
                                    ))
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default TeamSection;
