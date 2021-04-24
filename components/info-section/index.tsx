import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyleObject, useStyletron } from 'styletron-react';
import { Separator } from '../separator';

export type Props = {
  title: string;
  caption: string;
  children?: ReactNode;
  link?: string;
  text?: string;
  imgUrl?: string;
  customStyles?: StyleObject;
};

export default function InfoSection({
  title,
  caption,
  text,
  children,
  link,
  imgUrl,
  customStyles,
}: Props) {
  const [css] = useStyletron();

  function renderContent() {
    if (text) {
      return (
        <p
          className={css({
            fontFamily: "'Raleway', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '1.5em',
            textAlign: 'center',
            color: '#777',
          })}
        >
          {text}
        </p>
      );
    }

    return children;
  }

  return (
    <section
      className={css({
        paddingLeft: '24px',
        paddingRight: '24px',
        textAlign: 'center',
        width: '100%',
        ...customStyles,
      })}
    >
      <Separator $transparent />
      {imgUrl && (
        <Image src={imgUrl} layout="responsive" width={1280} height={851} />
      )}
      <Separator $transparent />
      <h2
        className={css({
          color: '#303030',
          fontFamily: '"Raleway", sans-serif',
          fontSize: '28px',
          letterSpacing: '3px',
          margin: 0,
          textTransform: 'uppercase',
        })}
      >
        {title}
      </h2>
      <Separator />
      <div
        className={css({
          color: '#303030',
          height: '2px',
          margin: '0px',
          width: '120px',
        })}
      />
      <h4
        className={css({
          color: '#303030',
          fontFamily: '"Playfair Display", serif',
          fontSize: '20px',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: 1.5,
          margin: 0,
        })}
      >
        {caption}
      </h4>
      {renderContent()}
      {link && (
        <Link href={link}>
          <a
            className={css({
              border: '2px solid black',
              padding: '0 14px',
              textDecoration: 'none',
              color: 'black',
              fontFamily: 'Raleway, sans-serif',
              lineHeight: '45px',
              height: '45px',
              textTransform: 'uppercase',
              fontWeight: 700,
              fontSize: '13px',
              display: 'inline-block',
              letterSpacing: '1px',
            })}
          >
            Find out more
          </a>
        </Link>
      )}
      <Separator $transparent />
    </section>
  );
}
