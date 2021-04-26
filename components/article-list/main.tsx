import React from 'react';
import { IArticle } from '../../types';
import { LatestArticle } from '../latest-article';
import { Wrapper } from './ui/wrapper';

export type Props = {
  articles: IArticle[];
};
export const ArticleList = ({ articles }: Props) => {
  function renderArticles(articles: IArticle[]) {
    if (!articles || articles.length === 0) {
      return <p>No articles were found. Check back soon!</p>;
    }
    return articles
      .slice(0, 4)
      .map((article) => (
        <LatestArticle
          key={article.id}
          title={article.title}
          author={article.author}
          description={article.description}
          image={article.image}
          publishedAt={article.publishedAt}
          slug={article.slug}
        />
      ));
  }
  return <Wrapper>{renderArticles(articles)}</Wrapper>;
};
