import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Url from "./pages/Url";
import Redirect from "./pages/Redirect";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/urls" exact>
          <Home />
        </Route>
        <Route path="/url/:id">
          <Url />
        </Route>
        <Route path="/:id">
          <Redirect />
        </Route>
      </Switch>
    </Layout>
  );
}
