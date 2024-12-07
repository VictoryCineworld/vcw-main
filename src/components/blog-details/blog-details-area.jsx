import Link from "next/link";
import React from "react";
import blogDetailsImg from "@assets/img/blog/blog-details-bg-1.jpg";
import Image from "next/image";
import BlogSidebarArea from "./blog-sidebar-area";
import MovieSliderNine from "@components/elements/slider/movie-slider/movie-slider-nine";
import PostboxForm from "@components/forms/postbox-form";
import PostBoxAuthor from "./postbox-author";
import BlogSocailIcon from "./blog-social-icon";
import BlogContent from "./blog-content";
import PostboxQuote from "./postbox-quote";
import PostboxMoreContent from "./postbox-more-content";
import blogDeatilsBg from "@assets/img/blog/blog-details-bg-2.jpg";

const BlogDetailsArea = ({ item }) => {
  return (
    <section className="postbox__area section-spacing-top pb-60">
      <div className="container">
        <div className="row g-40">
          <div className="col-xxl-8 col-xl-7 col-lg-7">
            <div className="postbox__wrapper wow fadeInUp" data-wow-delay={item.delay}>
              <h2 className="postbox__title">{item.title && item.title}</h2>
              <div className="postbox__item mb-60">
                <div className="postbox__meta mb-20">
                  <span>
                    <Link href="/blog">{item.subTitle && item.subTitle}</Link>
                  </span>
                  <span> {item.date && item.date}</span>
                </div>
                <div className="fm__postbox-thumb mb-30">
                  {item.image ? (
                    <Image
                      src={item.image}
                      style={{ width: "100%", height: "auto" }}
                      data-speed="auto"
                      alt="img not found"
                    />
                  ) : (
                    <Image
                      src={blogDetailsImg}
                      style={{ width: "100%", height: "auto" }}
                      data-speed="auto"
                      alt="img not found"
                    />
                  )}
                </div>
                <div className="">
                  <p>
                    There are lots of ways to generate leads. You can earn leads
                    through search results, paid ads, social media, and email
                    campaigns. Each of those methods is a great choice for lead
                    generation, Proin faucibus nec mauris a sodales, sed
                    elementum mi tincidunt. Sed eget viverra egestas nisi in
                    consequat. Fusce sodales augue a accumsan. Cras
                    sollicitudin, ipsum eget blandit pulvinar. Integer
                    tincidunt. Cras dapibus.
                  </p>
                  <p>
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>
                </div>
              </div>
              <BlogContent />
              <PostboxQuote />
              <div className="">
                <p>
                  There are lots of ways to generate leads. You can earn leads
                  through search results, paid ads, social media, and email
                  campaigns. Each of those methods is a great choice for lead
                  generation, Proin faucibus nec mauris a sodales, sed elementum
                  mi tincidunt. Sed eget viverra egestas nisi in consequat.
                  Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget
                  blandit pulvinar. Integer tincidunt. Cras dapibus.
                </p>
                <p className="mb-55">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo.
                </p>
              </div>
              <div className="postbox__thumb-2 mb-30">
                <Image
                  src={blogDeatilsBg}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="">
                <p className="mb-20">
                  Etiam vitae leo et diam pellentesque porta. Sed eleifend
                  ultricies risus, vel rutrum erat commodo ut. Praesent finibus
                  congue euismod. Nullam scelerisque massa vel augue placerat, a
                  tempor sem egestas. Curabitur placerat finibus lacus.
                </p>
                <p>
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </p>
              </div>
              <div className="sidebar__tag mb-35 mt-70 ">
                <Link href="/blog">Action</Link>
                <Link href="/blog">Adventure</Link>
                <Link href="/blog">Comedy</Link>
              </div>
              <BlogSocailIcon />
              <PostboxMoreContent />
              <PostBoxAuthor />
              <PostboxForm />
              <MovieSliderNine />
            </div>
          </div>
          <BlogSidebarArea />
        </div>
      </div>
    </section >
  );
};

export default BlogDetailsArea;
