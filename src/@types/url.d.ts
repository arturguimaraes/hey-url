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
  addClick: (url: IUrl, callback: Function) => void;
  getUrl: (urlId: string, callback: Function) => void;
};
