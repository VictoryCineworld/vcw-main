import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import VideoProduction from '@components/video-production/VideoProduction';

const index = () => {
    return (
       <Wrapper>
        <SEO pageTitle="Faime"/>
        <VideoProduction/>
       </Wrapper>
    );
};

export default index;