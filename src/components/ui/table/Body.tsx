export default function Body(props: any) {
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
              <td>{element.shortUrl}</td>
              <td>{element.clicks}</td>
            </tr>
          );
        }
      )}
    </tbody>
  );
}
