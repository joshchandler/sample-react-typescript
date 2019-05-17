import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import * as request from "request";
import * as actions from "./actions";
import { UserActionTypes } from "./types";

function get() {
  const url = "https://jsonplaceholder.typicode.com/users";

  return new Promise((resolve, reject) => {
    request(`${url}`, (err: string, response: any, body: string) => {
      if (err) {
        reject(err);
      } else if (response.statusCode >= 300) {
        reject(response);
      } else {
        resolve(
          JSON.parse(body).map((user: any) => ({
            city: user.address.city,
            company: user.company.name,
            email: user.email,
            user: user.name,
          })),
        );
      }
    });
  });
}

function* handleGetUsers() {
  try {
    const res = yield call(get);
    if (res.error) {
      yield put(actions.getUsersError(res.error));
    } else {
      yield put(actions.getUsersSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(actions.getUsersError(err.message!));
    } else {
      yield put(
        actions.getUsersError(typeof err === "object" ? err.message : err),
      );
    }
  }
}

export default function* saga() {
  yield all([
    fork(function*() {
      yield takeLatest(UserActionTypes.GET_USERS, handleGetUsers);
    }),
  ]);
}
