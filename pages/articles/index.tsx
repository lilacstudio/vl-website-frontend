import { InferGetStaticPropsType } from 'next';
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
    <div>
      <h1>All Articles</h1>
      <div>
        {articles &&
          articles.map((article) => (
            <h3 key={article.slug}>
              <a href={`/articles/${article.slug}`}>{article.title}</a>
            </h3>
          ))}
      </div>
    </div>
  );
}
