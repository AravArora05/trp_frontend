"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const createSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

const FeaturedArticle = ({ article }) => {
  const router = useRouter();
  const articleSlug = createSlug(article.title);
  const authorSlug = createSlug(article.author_name);

  return (
    <div className="featured-article">
      <img 
        src={article.image_src}  
        alt={article.title} 
        onClick={() => router.push(`/article/${articleSlug}`)} 
        className="featured-article-image" 
      />
      <h3 className="featured-article-category">
        <Link className="navLink1" href={`/sports/${article.sport}`}>
          {article.sport}
        </Link>
      </h3>
      <div className="featured-article-content">
        <h1 className="featured-article-title">
          <Link className="navLink1" href={`/article/${articleSlug}`}>
            {article.title}
          </Link>
        </h1>
        <h4 className="featured-article-author">
          <Link className="navLink1" href={`/author/${authorSlug}`}>
            {article.author_name}
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default FeaturedArticle;
