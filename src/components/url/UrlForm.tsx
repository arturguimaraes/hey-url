import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import UrlsContext from "../../context/urls-context";
import Button from "../ui/form/Button";
import Form from "../ui/form/Form";

export default function UrlForm(props: any) {
  const history = useHistory();
  const urlsContext = useContext(UrlsContext);
  const redirectUrlInputRef = useRef<HTMLInputElement>(null);
  const shortUrlInputRef = useRef<HTMLInputElement>(null);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  function callbackUrlForm() {
    setRedirectUrl("");
    setShortUrl("");
    history.replace("/");
    props.onShowAlert({
      text: "Your short URL has been generated successfully.",
      class: "success",
    });
    urlsContext?.loadUrls(() => {});
  }

  function submitHandler(event: Event) {
    event.preventDefault();
    const enteredRedirectUrl = redirectUrlInputRef.current?.value.toString();
    const enteredShortUrl = shortUrlInputRef.current?.value
      .toString()
      .toLowerCase();
    const newUrl = {
      id: "",
      redirectUrl: enteredRedirectUrl || "",
      shortUrl: enteredShortUrl || "",
      clicks: 0,
    };
    urlsContext?.addUrl(newUrl, callbackUrlForm);
  }

  /*function addUrlHandler(urlData: {
    redirectUrl: string | undefined;
    shortUrl: string | undefined;
    clicks: number | 0;
  }) {
    urlsContext?.addUrl(urlData);
    
  }*/

  return (
    <div className="row">
      <div className="col-md-12">
        <Form onSubmit={submitHandler}>
          <div className="col-md-12 mb-3">
            <label htmlFor="redirectUrl" className="mb-2">
              Your URL
            </label>
            <input
              className="form-control"
              type="url"
              id="redirectUrl"
              name="redirectUrl"
              value={redirectUrl}
              onChange={(event) => setRedirectUrl(event.target.value)}
              ref={redirectUrlInputRef}
              placeholder="https://www.google.com.br"
              required
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="shortUrl" className="mb-2">
              Short URL (max. 5 chars and only letters)
            </label>
            <input
              className="form-control"
              type="text"
              id="shortUrl"
              name="shortUrl"
              value={shortUrl}
              onChange={(event) => setShortUrl(event.target.value)}
              ref={shortUrlInputRef}
              placeholder="https://www.google.com.br"
              maxLength={5}
              required
            />
          </div>
          <div className="col-md-12 mb-3">
            <Button class="success">Generate URL</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
