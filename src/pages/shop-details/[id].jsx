import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShopDetails from '@components/shop-details'
import movieData from '@data/movie-data';

const ServiceDetails = () => {
    const [movie, setMovie] = useState({})
    const router = useRouter()
    const id = router.query.id;
    useEffect(() => {
        if (!id) (<h1>Looding...</h1>)
        else (setMovie(movieData.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <Wrapper>
        <SEO pageTitle='Faime' />
        <ShopDetails item={movie}/>
    </Wrapper>
    );
};

export default ServiceDetails;