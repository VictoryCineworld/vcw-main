import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import teamData from '@data/team-data';
import TeamDetailsPage from '@components/team-details'

const TeamDetails = () => {
    const [team, setTeam] = useState({})
    const router = useRouter()
    const id = router.query.id;
    useEffect(() => {
        if (!id) (<h1>Looding...</h1>)
        else (setTeam(teamData.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <Wrapper>
        <SEO pageTitle='VictoryCineworld' />
        <TeamDetailsPage item={team}/>
    </Wrapper>
    );
};

export default TeamDetails;