import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PortfoloDetailsPage from '@components/portfolo-details-page'
import PortfolioData from '@data/portfolio-data';

const PortfolioDetails = () => {
    const [movie, setMovie] = useState({})
    const router = useRouter()
    const id = router.query.id;
    useEffect(() => {
        if (!id) (<h1>Looding...</h1>)
        else (setMovie(PortfolioData.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <Wrapper>
        <SEO pageTitle='VictoryCineworld' />
        <PortfoloDetailsPage item={movie}/>
    </Wrapper>
    );
};

export default PortfolioDetails;