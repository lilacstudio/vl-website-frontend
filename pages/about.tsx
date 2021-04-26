import React from 'react';
import { H1, H4, P } from '../components/atoms';
import { Layout } from '../components/layout';
import { Separator } from '../components/separator';

export default function AboutUs() {
  return (
    <Layout pageTitle="About">
      <Separator $transparent />
      <H1>A little about us</H1>
      <Separator />
      <H4>
        Vegan Lebanese Street Food has arrived and it’s set to re-define ‘fast
        food’ as it stands today by making fresh, healthy and environmentally
        responsible plant-based food available to everyone — 365 days a year.
      </H4>
      <P>
        Having witnessed first hand the positive effect that a vegan diet can
        have on health and experiencing the benefits for ourselves, we set out
        to create a plant-based menu accessible to all.
      </P>
      <P>
        Traditional Lebanese food has long been based on healthy, diverse,
        vegetable-rich ingredients, making it fundamental to our wellbeing.
      </P>

      <P>
        By sourcing locally grown, chemical free produce and teaming up with
        game-changing sustainable companies that are creating ‘high-vibe’
        plant-powered foods, we have created a healthy vegan menu that remains
        true to the traditional flavours of Lebanon.
      </P>

      <P>
        Our philosophy is simple — to encourage and enable conscious and
        wholesome plant-derived food choices. By promoting vitality and the
        health benefits of a plant-fuelled life we can help more people nourish
        their bodies, while reducing our footprint on the planet and respecting
        our animals.
      </P>

      <P>
        Come and experience delicious{' '}
        <strong>Vegan Lebanese Street Food</strong> that’s good for you, good
        for the community and good for our planet.
      </P>
    </Layout>
  );
}
