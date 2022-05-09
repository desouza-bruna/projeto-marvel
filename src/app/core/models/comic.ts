import { Thumbnail, Url } from './character';

export interface Comic {
  id: number;
  title: string;
  description?: string;
  format?: string;
  thumbnail?: Thumbnail;
  urls?: Url[];
}
