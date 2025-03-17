import SEO from '@components/seo';
import movieData from '@data/movie-data';
import { Wrapper } from '@layout/index';
import React from 'react';
import MovieDetailsPage from '../../components/movie-details'

const index = () => {
    const item = movieData[0]
    return (
        <Wrapper>
            <SEO pageTitle='VictoryCineworld'/>
            <MovieDetailsPage/>
        </Wrapper>
    );
};

export default index;