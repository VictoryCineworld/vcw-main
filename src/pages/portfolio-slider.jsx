import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import PortfolioSlider from '@components/portfolio-slider'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle='VictoryCineworld'/>
             <PortfolioSlider/>
        </Wrapper>
    );
};

export default index;