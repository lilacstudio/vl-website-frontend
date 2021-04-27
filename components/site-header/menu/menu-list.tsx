import { FunctionComponent } from 'react';
import { useStyletron } from 'styletron-react';
import { MenuItem, IMenuItem } from './menu-item';

export type Props = {
  menuItems: IMenuItem[];
  isVisible?: boolean;
};

export const MenuList: FunctionComponent<Props> = ({
  menuItems,
  isVisible,
}) => {
  const [css] = useStyletron();
  return (
    <nav
      className={css({
        maxHeight: isVisible ? '80vh' : 0,
        overflow: 'hidden',
        transition: 'max-height .5s ease',
      })}
    >
      {menuItems.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </nav>
  );
};
