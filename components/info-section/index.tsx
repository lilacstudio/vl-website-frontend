import React from 'react';
import Link from 'next/link';

export type Props = {
  title: string;
  caption: string;
  content?: string | React.ReactNode;
  link?: string;
};

export default function InfoSection({ title, caption, content, link }: Props) {
  function renderContent(content) {
    if (typeof content === 'string') {
      return <div>{content}</div>;
    }
    return content;
  }
  return (
    <section>
      <div>{title}</div>
      <div>{caption}</div>
      {renderContent(content)}
      {link && (
        <Link href={link}>
          <a>Find out more</a>
        </Link>
      )}
    </section>
  );
}
