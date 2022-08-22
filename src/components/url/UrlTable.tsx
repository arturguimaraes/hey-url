import { useState, useEffect, useContext } from "react";
import UrlsContext from "../../context/urls-context";
import Body from "../ui/table/Body";
import Header from "../ui/table/Header";
import Table from "../ui/table/Table";

const URL_TABLE_HEADERS = ["Redirect URL", "Short URL", "Clicks"];

export default function UrlTable() {
  const [isLoading, setIsLoading] = useState(true);
  const urlsContext = useContext(UrlsContext);

  function callbackUrlTable() {
    setIsLoading(false);
  }

  useEffect(() => {
    if (isLoading) {
      urlsContext?.loadUrls(callbackUrlTable);
    }
  }, [urlsContext?.urls]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Table>
      <Header headers={URL_TABLE_HEADERS} />
      <Body elements={urlsContext?.urls} />
    </Table>
  );
}
