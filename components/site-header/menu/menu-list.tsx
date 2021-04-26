import { useStyletron } from 'styletron-react';
import { MenuItem, IMenuItem } from './menu-item';

export type Props = {
  menuItems: IMenuItem[];
  isVisible?: boolean;
};

export const MenuList = ({ menuItems, isVisible }) => {
  const [css] = useStyletron();
  return menuItems.map((item, i) => (
    <nav
      key={i}
      className={css({
        maxHeight: isVisible ? '80vh' : 0,
        overflow: 'hidden',
        transition: 'max-height .5s ease',
      })}
    >
      <MenuItem {...item} />
    </nav>
  ));
};
