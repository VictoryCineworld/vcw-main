import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import PortfolioDetailsPage from '@components/portfolo-details-page'
import PortfolioData from '@data/portfolio-data';

const index = () => {
    const item = PortfolioData[0]
    return (
        <Wrapper>
            <SEO pageTitle='VictoryCineworld'/>
            <PortfolioDetailsPage item={item}/>
        </Wrapper>
    );
};

export default index;