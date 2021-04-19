import { IArticle } from './article';

/**
 * Model definition for Writer
 */
export interface IWriter {
  id: string;
  name?: string;
  picture?: any;
  articles: IArticle[];
  email?: string;
}