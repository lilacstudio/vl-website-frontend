import { styled } from 'styletron-react';

export const P = styled('p', {
  color: '#777',
  fontFamily:
    'Raleway, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
});

export const H1 = styled('h1', {
  color: '#303030',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 600,
  letterSpacing: '3px',
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const H4 = styled('h4', {
  color: '#303030',
  display: 'block',
  fontFamily: '"Playfair Display", serif',
  fontSize: '1.25em',
  fontStyle: 'italic',
  fontWeight: 400,
  lineHeight: 1.5,
});
