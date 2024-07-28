"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AuthorDescription = ({ author }) => {
  if (!author) {
    return null;
  }

  return (
    <div className="author-information-container">
      <h2 className="all-posts-by">Filed Under</h2>
      <h4 className="author-name">{author.name}</h4>
      <hr className="divider" />
      <article className="author-preview">
        <img
          className="linkedin-image story-image"
          src={author.image}
          alt={`Author: ${author.name} image`}
        />
        <div className="information-container">
          <h3 className="story-author">
            <span className="underline">{author.name}</span>
          </h3>
          <h4 className="story-title">{author.intro}</h4>
          <Link href={author.github}>
            <img 
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
              style={{ width: '20px', height: '20px' }}
              alt="GitHub"
            />
          </Link>
          <Link href={author.linkedin}>
            <img 
              src="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" 
              style={{ width: '20px', height: '20px' }}
              alt="LinkedIn"
            />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default AuthorDescription;
