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

  function callbackRedirect(url: IUrl) {
    console.log(url);
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
      history.push("/");
    }, 3000);
  }

  useEffect(() => {
    if (isLoading) {
      urlsContext?.getUrl(params.id, callbackRedirect);
    }
  }, [isLoading, urlsContext, url]);

  if (notFound) {
    return (
      <section>
        <p className="text-center mb-4">
          No short URL found for "{params.id}"
        </p>
      </section>
    );
  }

  if (isLoading) {
    <section>
      <p className="text-center mb-4">Loading data for "{params.id}"</p>
    </section>;
  }

  return (
    <section>
      <p className="text-center mb-4">{url ? "Redirecting to " + url.redirectUrl + "..." : "Loading data..."}</p>
    </section>
  );
}
