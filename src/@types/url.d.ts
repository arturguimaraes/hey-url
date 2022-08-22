export interface IUrl {
  id: string;
  redirectUrl: string;
  shortUrl: string;
  clicks: number;
}

export type UrlContextType = {
  urls: IUrl[];
  length: number;
  addUrl: (url: IUrl, callback: Function) => void;
  loadUrls: (callback: Function) => void;
};
