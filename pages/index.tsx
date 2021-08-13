import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { InfoSection } from '../components/info-section';
import { IArticle } from '../types';
import { ArticleList } from '../components/article-list';
import { Hero } from '../components/hero';
import { styled } from 'styletron-react';
import { Layout } from '../components/layout';

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
});

export default function Home({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>
          Sydney&apos;s Best Vegan Lebanese Street Food Located in Bondi
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="We’re Australia’s First Vegan Lebanese Restaurant and we’re on a mission to re-define ‘fast food’ with ridiculously tasty (and healthy) Plant Based Lebanese food. "
        />
      </Head>

      {/* <SiteHeader /> */}
      <Hero />
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
          link="/about"
        />
        <InfoSection
          title="Healthy Vegan"
          caption="Eating a plant-based vegan diet isn’t just good for our animal
          friends and the environment, it can bring human health benefits too"
          text="We live and breathe a wholefoods, plant-based lifestyle. Eating
            plant foods that are rich in essential vitamins and minerals protect our
            bodies against preventable diseases while contributing to a sustainable
            future. Our bodies are our powerhouse, our home, and we only get one
            chance so let’s eat our way to a positive future—for our health, for
            our planet and for our animals."
          imgUrl="/images/healthy-vegan-food-bondi-australia.jpeg"
          link="/about"
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
          link="/about"
        />
        <InfoSection
          title="Latest News"
          caption="Keep up to date with our news and articles on all things health"
          customStyles={{
            backgroundColor: '#f5f5f5',
          }}
        >
          <ArticleList articles={articles.slice(0, 4)} />
        </InfoSection>
      </Main>
    </Layout>
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
