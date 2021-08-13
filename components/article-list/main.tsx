import React from 'react';
import { IArticle } from '../../types';
import { LatestArticle } from '../latest-article';
import { Wrapper } from './ui/wrapper';

export type Props = {
  articles: Array<IArticle & { imageProps: any }>;
};
export const ArticleList = ({ articles }: Props) => {
  function renderArticles(articles: Props['articles']) {
    if (!articles || articles.length === 0) {
      return <p>No articles were found. Check back soon!</p>;
    }
    return articles.map((article) => (
      <LatestArticle
        key={article.id}
        title={article.title}
        author={article.author}
        description={article.description}
        imageProps={article.imageProps}
        publishedAt={article.publishedAt}
        slug={article.slug}
      />
    ));
  }
  return <Wrapper>{renderArticles(articles)}</Wrapper>;
};
