import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import CorporateVideo from '@components/corporate-video/CorporateVideo';

const index = () => {
    return (
       <Wrapper>
        <SEO pageTitle="Faime"/>
        <CorporateVideo/>
       </Wrapper>
    );
};

export default index;