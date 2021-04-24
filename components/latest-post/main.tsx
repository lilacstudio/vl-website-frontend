import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styletron-react';
import { IArticle } from '../../types';

export type Props = Pick<
  IArticle,
  'author' | 'publishedAt' | 'description' | 'title' | 'image' | 'slug'
>;

const Title = styled('h5', {
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '15px',
  letterSpacing: '1px',
  fontFamily: 'Raleway, sans-serif',
  color: '#303030',
});

export function LatestPost({
  title,
  author,
  description,
  publishedAt,
  image: articleImage,
  slug,
}: Props) {
  return (
    <Link href={`/${slug}`}>
      <a>
        <li>
          <div>
            {articleImage && <Image src={articleImage.url} layout="fill" />}
            <Title>{title}</Title>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_API_HOST}${author.picture.url}`}
              width={50}
              height={50}
            />
            * {author.name}
          </div>
          <div>{publishedAt}</div>
        </li>
      </a>
    </Link>
  );
}
