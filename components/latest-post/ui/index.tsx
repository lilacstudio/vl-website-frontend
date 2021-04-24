import Link from 'next/link';
import React from 'react';
import { styled } from 'styletron-react';

export const Wrapper = styled('li', {
  listStyleType: 'none',
  backgroundColor: 'white',
  marginBottom: '64px',
  maxWidth: '100%',
  width: '360px',
});

export const TextWrapper = styled('div', {
  padding: '36px 28px 44px 28px',
});

const TitleText = styled('h5', {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '15px',
  letterSpacing: '1px',
  fontFamily: 'Raleway, sans-serif',
  margin: 0,
});

const TitleLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#303030',
  transition: 'color .2s linear',
  ':hover': {
    color: 'grey',
  },
});

export const Title = ({ slug, title }) => {
  return (
    <Link href={`/articles/${slug}`}>
      <TitleLink>
        <TitleText>{title}</TitleText>
      </TitleLink>
    </Link>
  );
};

export const Description = styled('p', {
  fontSize: '14px',
  fontFamily: 'Raleway, sans-serif',
  color: '#777',
  lineHeight: 1.75,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: '100px',
});

export const AuthorBlock = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const AuthorName = styled('span', {
  fontSize: '12px',
  fontFamily: 'Raleway, sans-serif',
  color: '#303030',
  marginLeft: '10px',
});

export const PublishedDate = styled('div', {
  fontSize: '12px',
  marginTop: '10px',
});

export const FooterWrapper = styled('div', {
  padding: '28px',
  borderTop: '1px solid #e0e0e0',
});
