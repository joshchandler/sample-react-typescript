import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import Routes from "./routes";
import { IApplicationState } from "./store";

// Any additional component props go here.
interface IProps {
  store: Store<IApplicationState>;
  history: History;
}

class App extends React.Component<IProps> {
  public render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
