import { Url } from 'url';
import { Thumbnail } from './character';

export interface Serie {
  id: number;
  title: string;
  description?: string;
  type?: string;
  thumbnail?: Thumbnail;
  urls?: Url[];
}
