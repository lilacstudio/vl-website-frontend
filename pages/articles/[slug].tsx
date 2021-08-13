import { InferGetStaticPropsType } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { A, Container, P } from '../../components/atoms';
import { Layout } from '../../components/layout';
import { IArticle } from '../../types';
import Link from 'next/link';

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

  const { base64, img } = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_API_HOST}${article.image.url}`,
  );

  return {
    props: { article, imageProps: { ...img, blurDataURL: base64 } },
  };
};

export default function Article({
  article,
  imageProps,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!article) {
    return <P>Article not found</P>;
  }

  return (
    <Layout pageTitle={article.title}>
      <Container>
        <div style={{ marginBottom: '16px' }}>
          Back to <Link href="/articles">Articles</Link>
        </div>
        <Image placeholder="blur" {...imageProps} />
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
