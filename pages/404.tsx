import Link from 'next/link';
import React from 'react';
import { BorderLink, H4 } from '../components/atoms';
import { Layout } from '../components/layout';

export default function Page404() {
  return (
    <Layout pageTitle="404: Not Found">
      <H4 $center>Oops! This page does not exist.</H4>
      <Link href="/">
        <BorderLink>Go Home</BorderLink>
      </Link>
    </Layout>
  );
}
