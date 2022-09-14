import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUrl } from "../@types/url";
import UrlView from "../components/url/UrlView";
import UrlsContext from "../context/urls-context";

export default function Url() {
  const urlsContext = useContext(UrlsContext);
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState<IUrl | null>(null);
  const [notFound, setNotFound] = useState(false);

  function callbackRedirect(url: IUrl) {
    if (url == null) {
      setNotFound(true);
      return;
    }
    setUrl(url);
    setIsLoading(false);
  }

  useEffect(() => {
    if (isLoading) {
      urlsContext?.getUrl(params.id, callbackRedirect);
    }
  }, [isLoading, urlsContext, url]);

  if (notFound) {
    return (
      <section>
        <p className="text-center mb-4">404. No URL found for "{params.id}"</p>
      </section>
    );
  }

  return (
    <section>
      {url ? (
        <UrlView url={url} />
      ) : (
        <p className="text-center mb-4">Loading data...</p>
      )}
    </section>
  );
}
