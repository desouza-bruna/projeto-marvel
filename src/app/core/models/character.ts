export interface Character {
  id?: number;
  name?: string;
  description?: string;
  modified?: string;
  resourceURI?: string;
  urls?: URL;
  thumbnail?: Thumbnail;
  comics?: General;
  stories?: General;
  events?: General;
  series?: General;
}

interface URL {
  type: string;
  url: string;
}

interface Thumbnail {
  extension?: string;
  path?: string;
}

interface General {
  available: number;
  collectionURI: string;
  items: Item;
}

interface Item {
  name: string;
  resourceURI: string;
}
