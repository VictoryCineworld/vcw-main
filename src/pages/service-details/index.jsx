import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import ServiceDetails from '@components/service-details'
import serviceData from '@data/service-data';

const index = () => {
    const item = serviceData[0]
    return (
        <Wrapper>
            <SEO pageTitle="Faime"/>
            <ServiceDetails item={item}/>
        </Wrapper>
    );
};

export default index;