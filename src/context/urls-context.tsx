import React, { useState } from "react";
import { UrlContextType, IUrl } from "../@types/url";

const UrlsContext = React.createContext<UrlContextType | null>(null);

export function UrlsContextProvider(props: any) {
  const [urls, setUrls] = useState<IUrl[]>([]);

  function addUrlHandler(url: IUrl, callback: Function) {
    const urlData = {
      redirectUrl: url.redirectUrl,
      shortUrl: url.shortUrl,
      clicks: 0,
    };
    fetch("https://heyurl-11bf3-default-rtdb.firebaseio.com/url.json", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(urlData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        //console.log(response);
        setUrls((previousUrls) => {
          return previousUrls.concat(url);
        });
      })
      .then(() => {
        callback();
      });
  }

  function loadUrlsHandler(callback: Function) {
    fetch("https://heyurl-11bf3-default-rtdb.firebaseio.com/url.json", {
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const urls = [];
        for (const key in data) {
          const url = {
            id: key,
            ...data[key],
          };
          urls.push(url);
        }
        setUrls(urls);
      })
      .then(() => {
        callback();
      });
  }

  const context = {
    urls: urls,
    length: urls.length,
    addUrl: addUrlHandler,
    loadUrls: loadUrlsHandler,
  };

  return (
    <UrlsContext.Provider value={context}>
      {props.children}
    </UrlsContext.Provider>
  );
}

export default UrlsContext;
