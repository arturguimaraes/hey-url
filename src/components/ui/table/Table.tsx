export default function Table(props: any) {
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table">
          {props.children}
        </table>
      </div>
    </div>
  );
}
