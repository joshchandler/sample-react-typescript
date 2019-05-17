import * as React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./hoc/asyncComponent";

const Home = asyncComponent(() => import("@pages/Home"));
const NotFound = asyncComponent(() => import("@pages/NotFound"));

class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
