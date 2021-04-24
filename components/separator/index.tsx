import { styled } from 'styletron-react';

export type Props = {
  $transparent?: boolean;
  $small?: boolean;
  $left?: boolean;
  $right?: boolean;
};

export const Separator = styled(
  'div',
  ({ $transparent, $small, $left, $right }: Props) => ({
    marginTop: '10px',
    marginBottom: '35px',
    marginLeft: $left ? 0 : 'auto',
    marginRight: $right ? 0 : 'auto',
    backgroundColor: '#303030',
    height: $transparent ? 0 : '2px',
    width: $small ? '25px' : '50px',
  }),
);
