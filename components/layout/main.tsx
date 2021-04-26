import Head from 'next/head';
import React, { FunctionComponent, ReactNode } from 'react';
import { SiteHeader } from '../site-header';
import { Wrapper, Inner, PageHeader, PageTitle } from './ui';

export type Props = {
  pageTitle: string;
  children?: ReactNode;
};

export const Layout: FunctionComponent<Props> = ({ pageTitle, children }) => {
  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&family=Playfair+Display:ital@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SiteHeader />
      <PageHeader>
        <PageTitle>{pageTitle}</PageTitle>
      </PageHeader>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};
