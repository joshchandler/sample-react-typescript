import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from "history";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { IApplicationState, rootReducer, rootSaga } from "./store";

export default function configureStore(
  history: History,
  initialState: IApplicationState,
): Store<IApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
