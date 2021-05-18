import { InferGetStaticPropsType } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { A, Container, H1, P } from '../../components/atoms';
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
  if (!article) {
    return <P>Article not found</P>;
  }

  return (
    <Layout pageTitle={article.title}>
      <Container>
        <ReactMarkdown
          skipHtml
          children={article.content}
          components={{
            h1: 'h2',
            p: P,
            a: A,
          }}
        />
      </Container>
    </Layout>
  );
}
