import { styled } from 'styletron-react';
import { Tablet } from '../../styles/globals';

export const P = styled('p', {
  color: '#777',
  fontFamily:
    'Raleway, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
});

export const A = styled('a', {
  color: 'green',
});

export const H1 = styled('h1', {
  color: '#303030',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 600,
  letterSpacing: '3px',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '28px',
  margin: 0,
  [Tablet]: {
    fontSize: '32px',
  },
});

export const H4 = styled('h4', ({ $center }: { $center: boolean }) => ({
  color: '#303030',
  display: 'block',
  fontFamily: '"Playfair Display", serif',
  fontSize: '1.25em',
  fontStyle: 'italic',
  fontWeight: 400,
  lineHeight: 1.5,
  textAlign: $center ? 'center' : 'left',
}));

export const Footer = styled('footer', {
  backgroundColor: '#222',
  height: '292px',
  display: 'flex',
  flexDirection: 'column',
});
