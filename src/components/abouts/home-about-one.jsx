import Image from 'next/image';
import React from 'react';
import aboutImage from '@assets/img/about/director-about.png'
import Link from 'next/link';

const AboutSection = () => {
   return (
      <div className="fm-about-area bg-common-black section-spacing fix">
         <div className="container">
            <div className="row align-items-center g-5 gy-50">
               <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
                  <div className="fm-director-about-img">
                     <Image src={aboutImage} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                     <div className="fm-director-years">
                        <span className="fm-director-years-number">30</span>
                        <span className="fm-director-years-content">
                           <span className="fm-director-plus">+</span>
                           <span className="fm-director-years-text">Years <br /> Experience</span>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                  <div className="fm-about-content-section">
                     <span className="section-subtitle title-anim">ABOUT ME</span>
                     <h2 className="section-main-title text-white mb-25 title-anim">Creative & Expert <br /> Film Director
                     </h2>
                     <p className="mb-20">{`I’m`} a world-renowned filmmaker who, for the past 9 years of my 26-years
                        career
                        have specialized in creating incredible cinematic images no matter what the camera. Some
                        of my
                        most iconic work was created with Canon DSLRs. Sloping each project alongside the
                        communities at
                        the heart of her stories in order to ensure authenticity.</p>

                     <p>I can film your project whether it is a commercial advertise, a short film or a document
                        film. I
                        have expertise in these fields. Founded in 2007 by Faime located at Kisterdast, London.
                     </p>
                     <div className="fm-director-about-name mt-55">
                        <Link href="/team-details" className="director-about-nam">David Anderson</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutSection;