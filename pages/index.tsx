import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { styled, useStyletron } from 'styletron-react';
import InfoSection from '../components/info-section';
import { Header } from '../components/header';
import { LatestPost } from '../components/latest-post';
import { IArticle } from '../types';

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const Hero = styled('div', {
  alignItems: 'center',
  backgroundBlendMode: 'darken',
  backgroundColor: 'rgba(0,0,0,0.5)',
  backgroundImage: 'url(/images/vegan-lebanese-street-food-bondi-store.jpg)',
  backgroundPositionX: '50%',
  backgroundPositionY: '0px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Raleway, sans-serif',
  height: '560px',
  justifyContent: 'center',
  marginBottom: '50px',
});

export default function Home({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [css] = useStyletron();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&family=Playfair+Display:ital@1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Hero>
        <div>
          <h4>
            <span
              className={css({
                fontFamily: "'Playfair Display'",
                fontStyle: 'italic',
                fontSize: '28px',
                fontWeight: 400,
              })}
            >
              plant-based
            </span>
          </h4>
        </div>
        <div>
          <h4>
            <span
              className={css({
                border: '3px solid white',
                padding: '8px 18px',
                display: 'inline-block',
                fontSize: '28px',
                fontWeight: 600,
                letterSpacing: '22px',
                textTransform: 'uppercase',
              })}
            >
              Lebanese
            </span>
          </h4>
        </div>
      </Hero>
      <Main>
        <InfoSection
          title="About Us"
          caption="We’re Australia’s First Vegan Lebanese Restaurant and we’re
              on a mission to re-define ‘fast food’ with ridiculously tasty (and healthy)
              Plant Based Lebanese food"
          text="As the world becomes more awake to the everyday reality of
              preventable disease, sustainability issues and animal cruelty we
              begin to shift even further towards a wholefoods, plant-based and
              enviro-friendly lifestyle. Our mission is to make a positive
              impact on fast food as it stands today by providing fast and
              healthy vegan meals influenced by Lebanese food."
          imgUrl="/images/about-us-vegan-lebanese-street-food.jpeg"
          link="/about-us"
        />
        <InfoSection
          title="Eco Vegan"
          caption="Our aim is to provide healthy ‘fast’ food, backed by the principle
              of local and sustainable farming and harvesting"
          text="Human health and sustainability for our planet are paramount to our
              society today. Through conscious choices around farming, quality
              ingredients, compostable packaging and waste disposal, we’re working
              towards a more sustainable future. Out of respect for our incredible
              and generous planet, we do not supply any ‘single-use’ plastic in our
              store. There is no Planet B after all."
          imgUrl="/images/eco-vegan-lebanese-street-food.jpeg"
          link="/about-us"
        />
        <InfoSection
          title="Latest News"
          caption="Keep up to date with our new and articles on all things health"
          customStyles={{
            backgroundColor: '#f5f5f5',
          }}
        >
          {articles &&
            articles.slice(0, 3).map((article) => (
              <h3 key={article.id}>
                <LatestPost
                  key={article.slug}
                  title={article.title}
                  author={article.author}
                  description={article.description}
                  image={article.image}
                  publishedAt={article.publishedAt}
                />
              </h3>
            ))}
        </InfoSection>
      </Main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  articles: IArticle[];
}> = async () => {
  // get posts from our api
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/articles`);
  const articles: IArticle[] = await res.json();
  return {
    props: { articles },
  };
};
