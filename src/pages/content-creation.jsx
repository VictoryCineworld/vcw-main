import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import ContentCreation from '@components/content-creation/ContentCreation';

const index = () => {
    return (
       <Wrapper>
        <SEO pageTitle="Faime"/>
        <ContentCreation/>
       </Wrapper>
    );
};

export default index;