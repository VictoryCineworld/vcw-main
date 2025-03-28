import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import FaqQuestion from '@components/faq'

const index = () => {
    return (
      <Wrapper>
        <SEO pageTitle="VictoryCineworld"/>
          <FaqQuestion/>
      </Wrapper>
    );
};

export default index;