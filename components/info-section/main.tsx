/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import Link from 'next/link';
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

export function InfoSection({
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
        width: '100%',
        ...customStyles,
      })}
    >
      <Separator $transparent />
      {imgUrl && (
        <div
          className={css({
            position: 'relative',
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            overflow: 'hidden',
          })}
        >
          <img src={imgUrl} alt={caption} />
        </div>
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
          textAlign: 'center',
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
          textAlign: 'center',
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
              color: 'black',
              display: 'block',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              height: '45px',
              letterSpacing: '1px',
              lineHeight: '45px',
              margin: '0 auto',
              padding: '0 14px',
              textAlign: 'center',
              textDecoration: 'none',
              textTransform: 'uppercase',
              width: '180px',
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
