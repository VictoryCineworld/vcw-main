import PortfolioData from '@data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioSection = () => {
   return (
      <div className="fm-director-films-area bg-common-black section-spacing fm-director-padding">
         <div className="container">
            <div className="row section-title-spacing wow fadeInUp" data-delay="0.3s">
               <div className="col-12">
                  <div className="fm-director-sec-title text-center ">
                     <span className="section-subtitle title-anim">MY WORKS</span>
                     <div>
                        <h2 className="section-main-title text-white title-anim featured-work-title">Featured Films</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container ">
            <div className="fm-director-wrapper">
               {
                  PortfolioData.slice(0, 6).map((item) => (
                     <div className="fm-director-films-single text-center wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                        <Link href={`/portfolio-details/${item.id}`}>
                           <div className="fm-director-films-img">
                              <Image src={item.image} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                           </div>
                        </Link>

                        <div className="fm-director-films-content">
                           <span className="fm-director-films-subtitle">{item.subTitle}</span>
                           <h4 className="fm-director-films-title"><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link>
                           </h4>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default PortfolioSection;