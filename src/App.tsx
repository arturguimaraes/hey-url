import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Other from "./pages/Other";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/other">
          <Other />
        </Route>
      </Switch>
    </Layout>
  );
}
