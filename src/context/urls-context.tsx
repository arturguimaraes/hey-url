import React, { useEffect, useState } from "react";
import StartFirebase from "../components/firebaseConfig";
import {
  ref,
  set,
  get,
  update,
  child,
  Database,
} from "firebase/database";
import { UrlContextType, IUrl } from "../@types/url";

const UrlsContext = React.createContext<UrlContextType | null>(null);

export function UrlsContextProvider(props: any) {
  const [urls, setUrls] = useState<IUrl[]>([]);
  const [db, setDb] = useState<Database | null>(null);

  useEffect(() => {
    setDb(StartFirebase());
    if (db != null) console.log("Database initiated:", db);
  }, [db]);

  function addUrlHandler(url: IUrl, callback: Function) {
    if (db != null) {
      //Duplicity check
      get(child(ref(db), "url/" + url.shortUrl)).then((snapshot) => {
        if (snapshot.exists()) {
          callback({
            success: false,
            message:
              "Oops! It seems the URL '" +
              url.shortUrl +
              "' is used already. Try another one.",
          });
          return false;
        }
        //No match, keep going
        const urlData = {
          redirectUrl: url.redirectUrl,
          shortUrl: url.shortUrl,
          clicks: 0,
        };
        ///Insert in database
        set(ref(db, "url/" + url.shortUrl), urlData)
          .then((response) => {
            //Updates context
            setUrls((previousUrls) => {
              return previousUrls.concat(url);
            });
          })
          //Sucess
          .then(() => {
            callback({ success: true });
            return true;
          })
          //Error
          .catch((error) => {
            callback({
              success: false,
              message: "An error ocurred in inserting data.",
            });
            console.log("An error ocurred in inserting data:", error);
          });
      });
    }
  }

  function loadUrlsHandler(callback: Function) {
    if (db != null) {
      get(ref(db, "url/"))
        .then((snapshot) => {
          const data = snapshot.exportVal();
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
  }

  function addClickHandler(url: IUrl, callback: Function) {
    if (db != null) {
      //Existance check
      get(child(ref(db), "url/" + url.shortUrl)).then((snapshot) => {
        if (snapshot.exists()) {
          //Updates clicks
          const urlData = {
            redirectUrl: url.redirectUrl,
            shortUrl: url.shortUrl,
            clicks: snapshot.val().clicks + 1,
          };
          ///Updates
          update(ref(db, "url/" + url.shortUrl), urlData)
            //Sucess
            .then(() => {
              callback(url);
              return true;
            })
            //Error
            .catch((error) => {
              callback({
                success: false,
                message: "An error ocurred in inserting data.",
              });
              console.log("An error ocurred in inserting data:", error);
            });
        }
      });
    }
  }

  function getUrlDataHandler(urlId: string, callback: Function) {
    if (db != null) {
      //Existance check
      get(child(ref(db), "url/" + urlId)).then((snapshot) => {
        let urlData = null;
        if (snapshot.exists()) {
          //Updates clicks
          urlData = {
            id: urlId,
            redirectUrl: snapshot.val().redirectUrl,
            shortUrl: snapshot.val().shortUrl,
            clicks: snapshot.val().clicks,
          };
        }
        callback(urlData);
      });
    }
  }

  const context = {
    urls: urls,
    length: urls.length,
    addUrl: addUrlHandler,
    loadUrls: loadUrlsHandler,
    addClick: addClickHandler,
    getUrl: getUrlDataHandler,
  };

  return (
    <UrlsContext.Provider value={context}>
      {props.children}
    </UrlsContext.Provider>
  );
}

export default UrlsContext;
