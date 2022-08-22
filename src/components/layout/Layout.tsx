import MainNavigation from "./Navbar";

export default function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      <main>
        <div className="container my-5">{props.children}</div>
      </main>
    </div>
  );
}
