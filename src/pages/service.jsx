import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import Services from '@components/sub-service'

const index = () => {
    return (
        <Wrapper>
        <SEO pageTitle='VictoryCineworld'/>
        <Services/>
    </Wrapper>
    );
};

export default index;