import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BlogDetailsPage from '@components/blog-details'
import blogData from '@data/blog-data';

const MovieDetails = () => {
    const [blog, setBlog] = useState({})
    const router = useRouter()
    const id = router.query.id;
    useEffect(() => {
        if (!id) (<h1>Looding...</h1>)
        else (setBlog(blogData.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <Wrapper>
        <SEO pageTitle={'Faime'} />
        <BlogDetailsPage item={blog}/>
    </Wrapper>
    );
};

export default MovieDetails;