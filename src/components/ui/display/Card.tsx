export default function Card(props: any) {
  return (
    <div className="row d-flex align-items-center justify-content-center mb-3">
      <div className={"col-md-" + (props.width || "6")}>
        <div className="card">
          <div className="card-header">{props.header || "Content Here"}</div>
          <div className="card-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
