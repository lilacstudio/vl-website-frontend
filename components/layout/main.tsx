import Head from 'next/head';
import React, { FunctionComponent, ReactNode } from 'react';
import { StyleObject } from 'styletron-standard';
import { SiteFooter } from '../site-footer';
import { SiteHeader } from '../site-header';
import { Wrapper, Inner, PageHeader, PageTitle } from './ui';

export type Props = {
  pageTitle?: string;
  metaTitle?: string;
  children?: ReactNode;
  overrides?: StyleObject;
};

export const Layout: FunctionComponent<Props> = ({
  pageTitle,
  metaTitle,
  overrides,
  children,
}) => {
  return (
    <Wrapper $style={overrides}>
      <Head>
        <title>
          {metaTitle ||
            `${pageTitle} - Sydney's Best Vegan Lebanese Street Food Located in Bondi`}
        </title>
      </Head>
      <SiteHeader />
      {pageTitle && (
        <PageHeader>
          <PageTitle>{pageTitle}</PageTitle>
        </PageHeader>
      )}
      <Inner>{children}</Inner>
      <SiteFooter />
    </Wrapper>
  );
};
