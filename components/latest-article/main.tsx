import moment from 'moment';
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
  TempStyledImg,
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
          <Link href={`/articles/${slug}`}>
            <a>
              <TempStyledImg
                src={`${process.env.NEXT_PUBLIC_API_HOST}${articleImage.url}`}
                alt={articleImage.alternativeText}
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
          {/**
           * Hide image until Cloudinary service is up to date.
           * Currently these images are huge in Strapi and a waste of bandwidth
          <img
            src={process.env.NEXT_PUBLIC_API_HOST + author.picture.url}
            width={30}
            height={30}
          />
          */}
          <AuthorName>{author.name}</AuthorName>
        </AuthorBlock>
        <PublishedDate>{formattedPublishedAt}</PublishedDate>
      </FooterWrapper>
    </Wrapper>
  );
}
