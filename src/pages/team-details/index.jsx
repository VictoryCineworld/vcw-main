import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import TeamDetailsPage from '@components/team-details'
import teamData from '@data/team-data';


const index = () => {
    const item = teamData[0]
    return (
        <Wrapper>
            <SEO pageTitle="VictoryCineworld"/>
            <TeamDetailsPage item={item}/>
        </Wrapper>
    );
};

export default index;