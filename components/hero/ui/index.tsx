import { styled } from 'styletron-react';

export const Wrapper = styled('div', {
  alignItems: 'center',
  backgroundBlendMode: 'darken',
  backgroundColor: 'rgba(0,0,0,0.5)',
  backgroundImage: 'url(/images/vegan-lebanese-street-food-bondi-store.jpg)',
  backgroundPositionX: '50%',
  backgroundPositionY: '0px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Raleway, sans-serif',
  height: '560px',
  justifyContent: 'center',
  marginBottom: '50px',
});

export const ItalicTitle = styled('h4', {
  fontFamily: "'Playfair Display'",
  fontSize: '28px',
  fontStyle: 'italic',
  fontWeight: 400,
  margin: 0,
});

export const BorderTitle = styled('h4', {
  border: '3px solid white',
  display: 'inline-block',
  fontSize: '28px',
  fontWeight: 600,
  letterSpacing: '22px',
  padding: '8px 18px',
  textTransform: 'uppercase',
});
