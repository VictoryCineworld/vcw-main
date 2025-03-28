import CheckoutMainArea from '@components/checkout';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'VictoryCineworld'} />
            <CheckoutMainArea />
        </Wrapper>

    );
};

export default index;