import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import TermsConditon from '@components/terms-conditions'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="VictoryCineworld"/>
            <TermsConditon/>
        </Wrapper>
    );
};

export default index;