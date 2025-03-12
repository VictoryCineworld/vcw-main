import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import CampaignContentCreation from '@components/service/campaign-content-creation/ccc';

const index = () => {
    return (
       <Wrapper>
        <SEO pageTitle="Faime"/>
        <CampaignContentCreation/>
       </Wrapper>
    );
};

export default index;