import { Link } from "react-router-dom";
import classes from "./Body.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Alert from "../display/Alert";

export default function Body(props: any) {
  const [hasAlert, setHasAlert] = useState(false);

  function hideAlertHandler() {
    setHasAlert(false);
  }

  if (props.elements.length === 0) {
    return (
      <tbody>
        <tr>
          <td className="text-center" colSpan={20}>
            No data
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <>
      <tbody>
        {hasAlert && (
          <tr>
            <td colSpan={20}>
              <Alert
                text="Link copied to clipboard."
                class="success"
                onHideAlert={hideAlertHandler}
              />
            </td>
          </tr>
        )}
        {props.elements.map(
          (element: {
            id: string;
            redirectUrl: string;
            shortUrl: string;
            clicks: number;
          }) => {
            return (
              <tr key={element.id} id={element.id}>
                <td>{element.redirectUrl}</td>
                <td>
                  <Link to={"/" + element.shortUrl} className={classes.link}>
                    {element.shortUrl}
                  </Link>
                </td>
                <td>{element.clicks}</td>
                <td>
                  <Link to={"/url/" + element.shortUrl} className="nav-link">
                    <i className="bi bi-eye"></i>
                  </Link>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </>
  );
}
