import { styled } from 'styletron-react';

export const Wrapper = styled('div', {});

export const Inner = styled('div', {
  margin: '0 auto',
  width: '95%',
  maxWidth: '768px',
});

export const PageHeader = styled('header', {
  backgroundColor: '#262626',
});

export const PageTitle = styled('h1', {
  color: 'white',
  fontFamily: 'Raleway, sans-serif',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '7px',
  lineHeight: '1.5em',
  textAlign: 'center',
  padding: '20px 0',
});
