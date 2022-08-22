import { Link } from "react-router-dom";

export default function NavbarLink(props: any) {
  return (
    <li className="nav-item">
      <Link to={props.url || "/"} className="nav-link">
        {props.text}
      </Link>
    </li>
  );
}
