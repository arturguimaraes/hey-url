export default function Button(props: any) {
  return (
    <button className={"btn btn-" + (props.class || "primary")}>
      {props.children}
    </button>
  );
}
