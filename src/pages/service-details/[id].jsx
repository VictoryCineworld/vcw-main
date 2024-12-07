import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetailsPage from '@components/service-details'
import serviceData from '@data/service-data';

const ServiceDetails = () => {
    const [service, setService] = useState({})
    const router = useRouter()
    const id = router.query.id;
    useEffect(() => {
        if (!id) (<h1>Looding...</h1>)
        else (setService(serviceData.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <Wrapper>
        <SEO pageTitle='Faime' />
        <ServiceDetailsPage item={service}/>
    </Wrapper>
    );
};

export default ServiceDetails;