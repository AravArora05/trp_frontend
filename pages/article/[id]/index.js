import SiteHeader from '../../../src/app/components/SiteHeader';
import ArticleHeader from '../../../src/app/components/ArticleHeader';
import { fetchArticles } from '../../../src/app/utils/api';
import '../../../src/app/globals.css';
import Footer from '@/app/components/Footer';

const createSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
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
          <div key={index} dangerouslySetInnerHTML={{ __html: element }} />
        ))}
      </div>
      <Footer/>
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
