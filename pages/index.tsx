import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import InfoSection from '../components/info-section';
import styles from '../styles/Home.module.css';

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <div>menu</div>
          <div>Logo</div>
        </header>
        <section>hero</section>
        <section>
          <img src="" alt="" />
        </section>
        <InfoSection
          title="About Us"
          caption="We’re Australia’s First Vegan Lebanese Restaurant and we’re on a mission to re-define ‘fast food’ with ridiculously tasty (and healthy) Plant Based Lebanese food"
          link="/about-us"
        />
        <section>
          <h2>
            <Link href="/articles">
              <a>Latest News</a>
            </Link>
          </h2>
          {articles &&
            articles.map((article) => (
              <h3>
                <Link href={`/articles/${article.slug}`}>
                  <a>{article.title}</a>
                </Link>
              </h3>
            ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  console.log(process.env.NEXT_PUBLIC_API_HOST);
  // get posts from our api
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/articles`);
  const articles = await res.json();
  return {
    props: { articles },
  };
}
