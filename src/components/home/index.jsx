import React from 'react';

import { Header } from '@layout/index';
import HeroOne from '@components/elements/slider/hero-slider/hero-one';
import HomeAboutOne from '../abouts/home-about-one';
import FilmsArea from './portfolio-section';
import TestimonialOne from '@components/elements/slider/testimonial-slider/testimonial-slider-one';
import TeamSection from '../common/team/team-section';

import FooterOne from '@layout/footers/footer-one';
import ContactSection from '@components/common/contact/contact-area';
import BrandAreaSection from '@components/elements/slider/brand-slider/brand-slider-one';
import MovieSliderSeven from '@components/elements/slider/movie-slider/movie-slider-seven';
import ClientSlider from '@components/elements/slider/brand-slider/client-slider';
import TechSection from '@components/sub-service/Tech';

const index = () => {
    return (
        <>
        <Header/>
        <main>
            <HeroOne/>
            <HomeAboutOne/>
            <BrandAreaSection/>
            <ClientSlider/>
            <MovieSliderSeven/>
            {/* <FilmsArea/> */}
            <TestimonialOne/>
            <TeamSection/>
            <TechSection/>
            <ContactSection/>
        </main>
        <FooterOne/>
        </>
    );
};

export default index;