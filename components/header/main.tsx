import React, { useState } from 'react';
import { useStyletron } from 'styletron-react';
import { MenuButton, MenuList } from './menu';
import { Logo } from './ui/logo';
import { Wrapper } from './ui/wrapper';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [css] = useStyletron();

  function toggleMenu() {
    setMenuIsVisible(!menuIsVisible);
  }
  return (
    <Wrapper>
      <MenuButton onClick={toggleMenu}>☰</MenuButton>
      <div className={css({ textAlign: 'center' })}>
        <Logo width={90} height={70} />
        <MenuList
          isVisible={menuIsVisible}
          menuItems={[
            { title: 'Home', url: '/' },
            {
              title: 'Bondi Menu',
              url: 'https://vegan-lebanese-bondi-beach.square.site/',
            },
            {
              title: 'Online Supermarket',
              url: 'https://www.veganlebaneseonline.com.au/',
            },
            {
              title: 'Subscribe',
              url: 'https://newsletter.veganlebanese.com.au/signup',
            },
            { title: 'About', url: '/about' },
          ]}
        />
      </div>
    </Wrapper>
  );
}
