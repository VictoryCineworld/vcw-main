import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import Contact from '@components/contact'

const index = () => {
    return (
      <Wrapper>
        <SEO pageTitle="VictoryCineworld"/>
        <Contact/>
      </Wrapper>
    );
};

export default index;