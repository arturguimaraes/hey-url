import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IUrl } from "../@types/url";
import UrlsContext from "../context/urls-context";

export default function Redirect() {
  const urlsContext = useContext(UrlsContext);
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState<IUrl | null>(null);
  const [notFound, setNotFound] = useState(false);

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  useEffect(() => {
    function callbackRedirect(url: IUrl) {
      //console.log(url);
      if (url == null) {
        setNotFound(true);
        return;
      }
      setUrl(url);
      setIsLoading(false);
      urlsContext?.addClick(url, secondCallbackRedirect);
    }

    function secondCallbackRedirect(url: IUrl) {
      console.log("Redirecting to:", url.redirectUrl);
      setTimeout(() => {
        openInNewTab(url.redirectUrl);
        history.push("/url/" + url.shortUrl);
      }, 3000);
    }

    if (isLoading) {
      urlsContext?.getUrl(params.id, callbackRedirect);
    }
  }, [isLoading, urlsContext, url, params.id, history]);

  if (notFound) {
    return (
      <section>
        <p className="text-center mb-4">404. No URL found for "{params.id}"</p>
      </section>
    );
  }

  return (
    <section>
      <p className="text-center mb-4">
        {url ? "Redirecting to " + url.redirectUrl + "..." : "Loading data..."}
      </p>
    </section>
  );
}
