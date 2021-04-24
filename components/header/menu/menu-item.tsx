import Link from 'next/link';
import { useStyletron } from 'styletron-react';

export interface IMenuItem {
  title: string;
  url: string;
}

export type Props = IMenuItem;

export const MenuItem = ({ title, url }: Props) => {
  const [css] = useStyletron();
  return (
    <li
      className={css({
        listStyleType: 'none',
        borderBottom: '1px solid rgb(234,234,234)',
        height: '46px',
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <Link href={url}>
        <a
          className={css({
            color: '#303030',
            fontFamily: '"Raleway", sans-serif',
            fontSize: '12px',
            textTransform: 'uppercase',
            fontWeight: 800,
            textDecoration: 'none',
            padding: '0 10px',
          })}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};
