import Link from 'next/link';
import React from 'react';
import AuthorImg from '@assets/img/blog/blog-author.jpg';
import Image from 'next/image';

const PostBoxAuthor = () => {
  return (
    <div className="postbox__author mb-60 ">
      <div className="postbox__author-thumb">
        <Image
          src={AuthorImg}
          style={{ width: "100%", height: "auto" }}
          alt="img not found"
        />
      </div>
      <div className="author-content">
        <div className="author-meta-social">
          <div className="author-meta">
            <h4 className="author-name">David Colins</h4>
            <div className="author-designation">Author</div>
          </div>
          <div className="fm-social-2">
            <Link href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link href="https://www.pinterest.com/" target="_blank">
              <i className="fa-brands fa-pinterest-p"></i>
            </Link>
          </div>
        </div>
        <div className="author-text">
          <p>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostBoxAuthor;