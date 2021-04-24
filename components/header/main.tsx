import React, { useState } from 'react';
import { MenuList } from './menu';
import { Logo } from './ui/logo';
import { Wrapper } from './ui/wrapper';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  function toggleMenu() {
    setMenuIsVisible(!menuIsVisible);
  }
  return (
    <Wrapper>
      <button onClick={toggleMenu}>menu</button>
      <Logo width={90} height={70} />
      <MenuList
        isVisible={menuIsVisible}
        menuItems={[
          { title: 'Home', url: '/' },
          { title: 'Menu', url: '/menu' },
          {
            title: 'Order',
            url: 'https://vegan-lebanese-bondi-beach.square.site/',
          },
          {
            title: 'Subscribe',
            url: 'https://newsletter.veganlebanese.com.au/signup',
          },
          { title: 'About', url: '/about' },
        ]}
      />
    </Wrapper>
  );
}
