"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ArticleHeader = ({ article }) => {
  return (
    <div className="article-header-container">
      <div className="article-category">
        <div className="triangle-right"></div>
        <Link href={`/sports/${article.sport}`}>
          <h4 className="article-header-sport">{article.sport}</h4>
        </Link>
      </div>
      <h2 className="article-header-title">{article.title}</h2>
      <p className="article-header-author">By {article.author_name}</p>
      <p className="article-header-date">{article.date}</p>
      <img className="article-image-url" src={article.image_src} alt={article.alt_text} />
      <figcaption className="article-image-caption">
        {article.figure_caption}
        <span className="article-image-creator-credits">{`Creator: ${article.figure_creator} | Credit: ${article.figure_credit}`}</span>
      </figcaption>
    </div>
  );
}

export default ArticleHeader;
