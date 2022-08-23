export default function Alert(props: any) {
  return (
    <div
      className={"alert alert-" + (props.class || "primary") + " alert-dismissible fade show text-center"}
      role="alert"
    >
      {props.text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onHideAlert}
      ></button>
    </div>
  );
}
