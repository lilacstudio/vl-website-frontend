import { InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
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
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h3>{article.title}</h3>
      <div>
        <ReactMarkdown escapeHtml={false} source={article.content} />
      </div>
    </div>
  );
}
