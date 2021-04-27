import { styled } from 'styletron-react';
import { Tablet } from '../../../styles/globals';

export const Wrapper = styled('div', {});

export const Inner = styled('div', {
  margin: '0 auto',
  maxWidth: '768px',
  width: '95%',
  padding: '70px 0',
  [Tablet]: {
    width: '80%',
  },
});

export const PageHeader = styled('header', {
  backgroundColor: '#262626',
});

export const PageTitle = styled('h1', {
  color: 'white',
  fontFamily: 'Raleway, sans-serif',
  fontSize: '35px',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '7px',
  lineHeight: '1.5em',
  textAlign: 'center',
  padding: '20px 0',
  margin: '0 2.5%',
  [Tablet]: {
    fontSize: '40px',
    padding: '35px 0',
    margin: '0 10%',
  },
});
