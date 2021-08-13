import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { ArticleList } from '../../components/article-list';
import { Container } from '../../components/atoms';
import { Layout } from '../../components/layout';
import { IArticle } from '../../types';

export type Props = {
  articles: IArticle[];
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/articles`);
  const articles: IArticle[] = await res.json();
  return {
    props: { articles },
  };
};

export default function Articles({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout pageTitle={'Blog'} overrides={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <ArticleList articles={articles} />
      </Container>
    </Layout>
  );
}
