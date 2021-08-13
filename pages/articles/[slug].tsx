/* eslint-disable @next/next/no-img-element */
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useStyletron } from 'styletron-react';
import { A, Container, P } from '../../components/atoms';
import { Layout } from '../../components/layout';
import { IArticle } from '../../types';

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/articles`);
  const articles: IArticle[] = await res.json();

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/articles?slug=${encodeURIComponent(
      slug,
    )}`,
  );
  const articles: IArticle[] = await res.json();
  const article = articles[0];

  return {
    props: { article },
  };
};

export default function Article({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [css] = useStyletron();

  if (!article) {
    return <P>Article not found</P>;
  }

  return (
    <Layout pageTitle={article.title}>
      <Container className={css({ maxWidth: '680px' })}>
        <div style={{ marginBottom: '16px' }}>
          Back to <Link href="/articles">Articles</Link>
        </div>
        <div
          className={css({
            width: '100%',
            maxHeight: '400px',
            margin: 'auto',
            overflow: 'hidden',
          })}
        >
          <img
            className={css({
              objectFit: 'contain',
              height: '100%',
              width: '100%',
            })}
            alt={article.image.alternativeText}
            src={process.env.NEXT_PUBLIC_API_HOST + article.image.url}
          />
        </div>
        <ReactMarkdown
          skipHtml
          components={{
            h1: 'h2',
            p: P,
            a: A,
          }}
        >
          {article.content}
        </ReactMarkdown>
      </Container>
    </Layout>
  );
}
