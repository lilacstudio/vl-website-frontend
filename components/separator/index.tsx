import { styled } from 'styletron-react';

export type Props = {
  $transparent?: boolean;
  $large?: boolean;
};

export const Separator = styled('div', (props: Props) => ({
  marginTop: '10px',
  marginBottom: '35px',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#303030',
  height: props.$transparent ? 0 : '2px',
  width: '50px',
}));
