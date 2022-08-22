export default function Form(props: any) {
  return (
    <form className="row" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}
