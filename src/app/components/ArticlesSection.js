"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ArticlesSection = ({ articles }) => {
  const router = useRouter();
  const [minValue, changeValue] = useState(5);

  const createSlug = (text) => {
    if (!text) return 'unknown';
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const arr = articles.map((article, index) => (
    <article key={index} className="story" id={`story${index + 1}`}>
      <img
        src={article.image_src}
        alt={article.alt_text || article.title}
        className="story-image"
        onClick={() => router.push(`/article/${createSlug(article.title)}`)}
      />
      <div className="story-content">
        <h3 className="story-author">
          By <span className="underline">
            <Link className="navLink1" href={`/author/${createSlug(article.author_name)}`}>
              {article.author_name || 'Unknown Author'}
            </Link>
          </span>
        </h3>
        <h4 className="story-date">
          <span className="underline">{article.date}</span>
        </h4>
        <h2 className="story-title">
          <Link className="navLink1" href={`/article/${createSlug(article.title)}`}>
            {article.title}
          </Link>
        </h2>
        <h4 className="story-category">
          Filed under <span className="underline">
            <Link className="navLink1" href={`/sports/${article.sport}`}>
              {article.sport}
            </Link>
          </span>
        </h4>
      </div>
    </article>
  ));

  if (minValue >= articles.length) {
    return (
      <>
        {arr}
        <div className="noClick">
          <button className="cantClick">All Articles Loaded</button>
        </div>
      </>
    );
  }

  const addValues = () => {
    const arrayLength = articles.length;
    if (minValue >= arrayLength) {
      return;
    }

    const minLength = Math.min(minValue + 2, arrayLength);
    changeValue(minLength);
  };

  if (!articles || articles.length === 0) {
    return <div>No articles available</div>;
  }

  const slicedArticles = arr.slice(0, minValue);

  return (
    <section className="latest-stories">
      {slicedArticles}
      <button onClick={addValues} className="canClick">Load More Articles</button>
    </section>
  );
};

export default ArticlesSection;
