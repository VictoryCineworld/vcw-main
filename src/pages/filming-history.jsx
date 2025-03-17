import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import HomeFour from '../components/home-four'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="VictoryCineworld"/>
            <HomeFour/>
        </Wrapper>
    );
};

export default index;