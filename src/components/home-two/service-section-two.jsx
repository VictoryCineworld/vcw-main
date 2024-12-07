import ServiceScroll from '@components/elements/slider/scroll-area-slider/service-scroll';
import serviceData from '@data/service-data';
import Link from 'next/link';
import React from 'react';

const ServiceTwo = () => {
   return (
      <section className="fm-services-area fm-services-spc bg-common-black section-spacing">
         <div className="container pt-20">
            <div className="row g-5 gy-50">
               <div className="col-xl-4 col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="services-sec-wrapper">
                     <div className="section-title section-title-spacing">
                        <span className="section-subtitle title-anim">WHAT WE DO</span>
                        <h2 className="section-main-title text-white title-anim">Best
                           Offering
                           Services</h2>
                     </div>

                     <div className="fm-services-btn btn_wrapper">
                        <Link href="/service-details" className="blog-rotate-btn is-white btn-item btn__item-move">
                           <span>
                              <i className="flaticon-right-arrow-1"></i>
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="col-xl-8 col-lg-12">
                  <div className="fm-services-content-2 fade_bottom">
                     {
                        serviceData.slice(4, 8).map((item) => (
                           <div className="fm-single-services-content mb-20 wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                              <span className="services-num">{item.serviceNum}</span>
                              <h4 className="fm-service-title">
                                 <Link className="fm-content-title" href={`/service-details/${item.id}`}>{item.title}</Link>
                              </h4>
                              <p className="fm-services-text-2">{item.description}</p>
                              <div className="fm-btn services-btn-2">
                                 <Link href={`/service-details/${item.id}`} className="border-btn is-white">{item.serviceBtn}
                                    <span>
                                       <i className="fa-regular fa-arrow-right"></i>
                                    </span>
                                 </Link>
                              </div>
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
         <ServiceScroll />
      </section>
   );
};

export default ServiceTwo;