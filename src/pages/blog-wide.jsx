import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import BlogWideArea from '@components/blog-wide'


const BlogWide = () => {
    return (
       <Wrapper>
        <SEO pageTitle="VictoryCineworld"/>
           <BlogWideArea/>
       </Wrapper>
    );
};

export default BlogWide;