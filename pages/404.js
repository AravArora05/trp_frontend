// pages/404.js
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="container">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="content">
        <h1 className="title">404</h1>
        <p className="description">Oops! The page you are looking for does not exist.</p>
        <Link href="/">
          <a className="home-link">Go back to Home</a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f4f8;
        }
        .content {
          text-align: center;
        }
        .title {
          font-size: 6rem;
          margin: 0;
          color: #0070f3;
        }
        .description {
          font-size: 1.5rem;
          color: #333;
        }
        .home-link {
          margin-top: 1.5rem;
          font-size: 1.2rem;
          color: #fff;
          background-color: #0070f3;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          text-decoration: none;
        }
        .home-link:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
