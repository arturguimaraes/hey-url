import { Link } from "react-router-dom";
import { IUrl } from "../../@types/url";
import Card from "../ui/display/Card";
import Header from "../ui/table/Header";
import Table from "../ui/table/Table";
import classes from "./UrlView.module.scss";

interface Props {
  url: IUrl;
}

const URL_TABLE_HEADERS = ["Property", "Value"];

export default function UrlView(props: Props) {
  const url = props.url;
  return (
    <Card header={url.shortUrl}>
      <Table>
        <Header headers={URL_TABLE_HEADERS} />
        <tbody>
          <tr>
            <td>Short Url</td>
            <td>
              <Link to={"/" + url.shortUrl} className={classes.link}>
                {url.shortUrl}
              </Link>
            </td>
          </tr>
          <tr>
            <td>Redirect Url</td>
            <td>{url.redirectUrl}</td>
          </tr>
          <tr>
            <td>Number of Clicks</td>
            <td>{url.clicks}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}
