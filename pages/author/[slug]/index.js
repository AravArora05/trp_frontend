import SiteHeader from '../../../src/app/components/SiteHeader';
import AuthorDescription from '../../../src/app/components/AuthorDescription';
import Footer from '@/app/components/Footer';
import ArticlesSection from '@/app/components/ArticlesSection';
import { fetchAuthors, fetchArticles } from '../../../src/app/utils/api';
import '../../../src/app/globals.css';

export default function SelectedAuthor({ author, articles }) {
  return (
    <>
      <SiteHeader />
      <AuthorDescription author={author} />
      <ArticlesSection articles={articles} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  console.log(`Fetching data for slug: ${slug}`);

  const authors = await fetchAuthors();
  const selectedAuthor = authors.find(author => createSlug(author.name) === slug);

  if (!selectedAuthor) {
    console.log(`No author found for slug: ${slug}`);
    return { notFound: true };
  }


  const allArticles = await fetchArticles();
  const authorArticles = allArticles.filter(article => 
    article.author_name === selectedAuthor.name
  );

  console.log(`Found author: ${selectedAuthor.name} with ${authorArticles.length} articles.`);

  return {
    props: {
      author: selectedAuthor,
      articles: authorArticles,
    },
  };
}

export async function getStaticPaths() {
  const authors = await fetchAuthors();
  const paths = authors.map(author => {
    const slug = createSlug(author.name);
    console.log(`Generated slug: ${slug} for author: ${author.name}`);
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

function createSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}
