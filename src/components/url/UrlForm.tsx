import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import UrlsContext from "../../context/urls-context";
import Alert from "../ui/display/Alert";
import Button from "../ui/form/Button";
import Form from "../ui/form/Form";

export default function UrlForm(props: any) {
  const history = useHistory();
  const urlsContext = useContext(UrlsContext);
  const redirectUrlInputRef = useRef<HTMLInputElement>(null);
  const shortUrlInputRef = useRef<HTMLInputElement>(null);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [hasAlert, setHasAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertClass, setAlertClass] = useState("primary");

  function showAlertHandler(alert: { text: string; class: string }) {
    setHasAlert(true);
    setAlertText(alert.text);
    setAlertClass(alert.class);
  }

  function hideAlertHandler() {
    setHasAlert(false);
    setAlertText("");
    setAlertClass("");
  }

  function callbackUrlForm(response: { success: boolean; message: string }) {
    //Error
    if (response.success === false) {
      history.replace("/");
      showAlertHandler({
        text: response.message,
        class: "danger",
      });
      return;
    }
    //Success
    setRedirectUrl("");
    setShortUrl("");
    history.replace("/");
    showAlertHandler({
      text:
        "Your short URL '" + shortUrl + "' has been generated successfully.",
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
    if (enteredShortUrl && enteredShortUrl.length !== 5) {
      history.replace("/");
      showAlertHandler({
        text: "Your URL needs to be 5 characters long.",
        class: "danger",
      });
      return;
    }
    const newUrl = {
      id: "",
      redirectUrl: enteredRedirectUrl || "",
      shortUrl: enteredShortUrl || "",
      clicks: 0,
    };
    urlsContext?.addUrl(newUrl, callbackUrlForm);
  }

  return (
    <div className="row">
      <div className="col-md-12">
        {hasAlert && (
          <Alert
            text={alertText}
            class={alertClass}
            onHideAlert={hideAlertHandler}
          />
        )}
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
              onChange={(event) =>
                setRedirectUrl(event.target.value.toLowerCase())
              }
              ref={redirectUrlInputRef}
              placeholder="https://www.google.com.br"
              required
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="shortUrl" className="mb-2">
              Short URL (max. 5 chars)
            </label>
            <input
              className="form-control"
              type="text"
              id="shortUrl"
              name="shortUrl"
              value={shortUrl}
              onChange={(event) =>
                setShortUrl(event.target.value.toLowerCase())
              }
              ref={shortUrlInputRef}
              placeholder="googl"
              maxLength={5}
              required
            />
          </div>
          <div className="col-md-12">
            <Button class="success">Generate URL</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
