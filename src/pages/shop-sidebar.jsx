import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import ShopSidebar from '@components/shop-sidebar'
const index = () => {
    return (
       <Wrapper>
        <SEO pageTitle="VictoryCineworld"/>
          <ShopSidebar/>
       </Wrapper>
    );
};

export default index;