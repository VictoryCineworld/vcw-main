import movieData from '@data/movie-data';
import Link from 'next/link';
import React from 'react';

const LandingBannerArea = () => {

    return (
        <div className="fm-landing-banner-area bg-common-black section-spacing-bottom">
            <div className="container">
                <div className="row g-5">
                    {
                        movieData.slice(52, 55).map((item) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                                <div className="fm-landing-banner-single fade_bottom_4">
                                    <div className="fm-landing-banner-thumb" style={{ backgroundImage: `url(${item.image.src})` }}></div>
                                    <span className="fm-landing-banner-subtext">{item.subText}</span>
                                    <h4 className="fm-landing-banner-text">{item.title}</h4>
                                    <Link href="/movie" className="fm-landing-banner-button">{item.movieBtn}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LandingBannerArea;