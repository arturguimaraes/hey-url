import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { UrlsContextProvider } from "./context/urls-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UrlsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UrlsContextProvider>
);
