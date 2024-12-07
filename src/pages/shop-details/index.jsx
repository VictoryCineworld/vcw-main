import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import ShopDetails from '@components/shop-details'
import movieData from '@data/movie-data';

const index = () => {
    const item = movieData[0]
    return (
        <Wrapper>
            <SEO pageTitle="Faime"/>
            <ShopDetails item={item}/>
        </Wrapper>
    );
};

export default index;