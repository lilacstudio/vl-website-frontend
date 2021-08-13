import { InferGetStaticPropsType } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';
import { ArticleList } from '../../components/article-list';
import { Container } from '../../components/atoms';
import { Layout } from '../../components/layout';
import { IArticle } from '../../types';

interface IArticleWithBlurImageBlur extends IArticle {
  imageProps: any;
}
export type Props = {
  articles: IArticleWithBlurImageBlur;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/articles`);
  const articles: IArticle[] = await res.json();

  const articlesWithImageBlur = articles.map(async (article) => {
    const { base64, img } = await getPlaiceholder(
      `${process.env.NEXT_PUBLIC_API_HOST}${article.image.url}`,
    );
    return { ...article, imageProps: { ...img, blurDataURL: base64 } };
  });

  return {
    props: { articles: await Promise.all(articlesWithImageBlur) },
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
