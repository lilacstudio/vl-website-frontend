import Link from 'next/link';
import React, { useState } from 'react';
import { useStyletron } from 'styletron-react';
import { MenuButton, MenuList } from './menu';
import { Logo } from './ui/logo';
import { Wrapper } from './ui/wrapper';

export function SiteHeader() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [css] = useStyletron();

  function toggleMenu() {
    setMenuIsVisible(!menuIsVisible);
  }
  return (
    <Wrapper>
      <MenuButton onClick={toggleMenu}>☰</MenuButton>
      <div className={css({ textAlign: 'center' })}>
        <Link href="/">
          <a>
            <Logo width={90} height={70} />
          </a>
        </Link>
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
            { title: 'Blog', url: '/articles' },
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
