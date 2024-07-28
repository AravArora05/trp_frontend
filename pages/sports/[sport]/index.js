// pages/sports/[sport]/index.js

import SiteHeader from '../../../src/app/components/SiteHeader';
import CategoryHeader from '../../../src/app/components/CategoryHeader';
import ArticlesSection from '../../../src/app/components/ArticlesSection';
import '../../../src/app/globals.css';

import { fetchArticles } from '../../../src/app/utils/api';

const allowedSports = ["NBA", "MLB", "Soccer", "NFL"];

export default function CurrentSport({ sport, filteredArticles }) {
  return (
    <>
      <SiteHeader />
      <CategoryHeader name={sport} />
      <ArticlesSection articles={filteredArticles} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { sport } = params;
  const articles = await fetchArticles();
  const filteredArticles = articles.filter(article => article.sport === sport);

  return {
    props: { sport, filteredArticles },
  };
}

export async function getStaticPaths() {
  const paths = allowedSports.map(sport => ({ params: { sport } }));

  return { paths, fallback: false };
}
