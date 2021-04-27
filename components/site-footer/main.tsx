import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { Footer, P } from '../atoms';
import { Copyright } from './ui/copyright';

export const SiteFooter: FunctionComponent = () => {
  const year = moment().format('YYYY');
  return (
    <Footer>
      <Copyright>
        <P>&copy; {year} Vegan Lebanese</P>
      </Copyright>
    </Footer>
  );
};
