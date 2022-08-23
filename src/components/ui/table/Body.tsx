import { Link } from "react-router-dom";
import classes from './Body.module.scss';

export default function Body(props: any) {
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
    <tbody>
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
                  View
                </Link>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
}
