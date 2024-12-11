import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import ItServices from '@components/IT-services/ItServices';

const index = () => {
    return (
       <Wrapper>
        <SEO pageTitle="Faime"/>
        <ItServices/>
       </Wrapper>
    );
};

export default index;