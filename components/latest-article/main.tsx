import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../../types';
import { Separator } from '../separator';
import {
  AuthorBlock,
  AuthorName,
  Description,
  FooterWrapper,
  PublishedDate,
  TextWrapper,
  Title,
  Wrapper,
} from './ui';

export type Props = Pick<
  IArticle,
  'author' | 'publishedAt' | 'description' | 'title' | 'image' | 'slug'
>;

export function LatestArticle({
  title,
  author,
  description,
  publishedAt,
  image: articleImage,
  slug,
}: Props) {
  const formattedPublishedAt = moment(publishedAt).format('Do MMMM, YYYY');

  return (
    <Wrapper>
      {articleImage && (
        <div>
          <Link href={`/${slug}`}>
            <a>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_HOST}${articleImage.url}`}
                height={articleImage.height}
                width={articleImage.width}
                alt={articleImage.alternativeText}
                layout="responsive"
              />
            </a>
          </Link>
        </div>
      )}
      <TextWrapper>
        <Title slug={slug} title={title} />
        <Separator $small $left />
        <Description>{description}</Description>
      </TextWrapper>
      <FooterWrapper>
        <AuthorBlock>
          <Image
            src={process.env.NEXT_PUBLIC_API_HOST + author.picture.url}
            width={30}
            height={30}
            layout="fixed"
          />
          <AuthorName>{author.name}</AuthorName>
        </AuthorBlock>
        <PublishedDate>{formattedPublishedAt}</PublishedDate>
      </FooterWrapper>
    </Wrapper>
  );
}
