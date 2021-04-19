import { ICategory } from './category';
import { IWriter } from './writer';

/**
 * Model definition for article
 */
export interface IArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  publishedAt: Date;
  status: "draft" | "published";
  slug: string;
  category?: ICategory;
  image: any;
  author?: IWriter;
}