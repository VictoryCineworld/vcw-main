import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import Documentary from '@components/documentary/Documentary';

const index = () => {
    return (
       <Wrapper>
        <SEO pageTitle="Faime"/>
        <Documentary/>
       </Wrapper>
    );
};

export default index;