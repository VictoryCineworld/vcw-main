import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import DigitalMarketing from '@components/digital-marketing/DigitalMarketing';

const index = () => {
    return (
       <Wrapper>
        <SEO pageTitle="Faime"/>
        <DigitalMarketing/>
       </Wrapper>
    );
};

export default index;