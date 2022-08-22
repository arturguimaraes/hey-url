import { v4 as uuid } from "uuid";

export default function Header(props: any) {
  return (
    <thead>
      <tr>
        {props.headers.map((header: string) => {
          return (
            <th key={uuid()} scope="col">
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
