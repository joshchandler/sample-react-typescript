import { Action, AnyAction, combineReducers, Dispatch } from "redux";
import { all, fork } from "redux-saga/effects";

import userReducer from "./user/reducer";
import userSaga from "./user/sagas";
import { IUserState } from "./user/types";

// The top-level state object
export interface IApplicationState {
  user: IUserState;
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<IApplicationState>({
  user: userReducer,
});

export function* rootSaga() {
  yield all([fork(userSaga)]);
}
