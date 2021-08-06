import { styled } from '../../pages/_app';
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

export const BorderLink = styled('a', {
  border: '2px solid black',
  color: 'black',
  display: 'block',
  fontFamily: 'Raleway, sans-serif',
  fontSize: '13px',
  fontWeight: 700,
  height: '45px',
  letterSpacing: '1px',
  lineHeight: '45px',
  margin: '0 auto',
  padding: '0 14px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  width: '180px',
});

// @BUG $theme prop not properly typed
export const Container = styled('div', ({ $theme }: { $theme?: any }) => ({
  padding: `${$theme.sizing[0]} ${$theme.sizing[4]}`,
  maxWidth: '1200px',
  margin: '0 auto',
}));
