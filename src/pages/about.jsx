import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import About from '../components/about'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle='VictoryCineworld'/>
          <About/>
        </Wrapper>
    );
};

export default index;