import { put, takeEvery, call } from "redux-saga/effects";
import { ASYNC_FETCH_USER, fetchUserAction } from "../store/userReducer";

const fetchUserFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users");

function* fetchUserWorker() {
  const data = yield call(fetchUserFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(fetchUserAction(json));
}

export function* userWatcher() {
  yield takeEvery(ASYNC_FETCH_USER, fetchUserWorker);
}
