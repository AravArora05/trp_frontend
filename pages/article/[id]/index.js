import React from 'react';
import SiteHeader from '../../../src/app/components/SiteHeader';
import ArticleHeader from '../../../src/app/components/ArticleHeader';
import { fetchArticles } from '../../../src/app/utils/api';
import '../../../src/app/globals.css';
import Footer from '@/app/components/Footer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import Latex from 'react-latex-next';

const createSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

const containsLatex = (content) => {
  return content.includes('$$') || content.includes('\\(') || content.includes('\\[');
};

export default function Article({ article }) {
  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <SiteHeader />
      <ArticleHeader article={article} />
      <div className="article-information-container">
        {article.content.map((element, index) => (
          containsLatex(element) ? (
            <Latex key={index}>{element}</Latex>
          ) : (
            <ReactMarkdown
              key={index}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {element}
            </ReactMarkdown>
          )
        ))}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const articles = await fetchArticles();
  const articleSlug = params.id;
  const article = articles.find(article => createSlug(article.title) === articleSlug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: { article },
  };
}

export async function getStaticPaths() {
  const articles = await fetchArticles();
  const paths = articles.map(article => ({
    params: { id: createSlug(article.title) },
  }));

  return { paths, fallback: false };
}
