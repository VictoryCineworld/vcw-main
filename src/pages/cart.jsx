import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import Cart from '@components/cart'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="VictoryCineworld"/>
           <Cart/>
        </Wrapper>
    );
};

export default index;