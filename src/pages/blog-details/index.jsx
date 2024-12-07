import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import BlogDetailsPage from '@components/blog-details'
import blogData from '@data/blog-data';

const index = () => {
    const item = blogData[0]
    return (
        <Wrapper>
            <SEO pageTitle='Faime'/>
            <BlogDetailsPage item={item}/>
        </Wrapper>
    );
};

export default index;