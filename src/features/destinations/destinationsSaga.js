import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../api/axiosInstance';
import {
  fetchDestinations,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
} from './destinationsSlice';

function* handleFetchDestinations() {
  try {
    const { data } = yield call(axios.get, '/destination');
    yield put(fetchDestinationsSuccess(data));
  } catch (error) {
    yield put(fetchDestinationsFailure(error.message));
  }
}

export default function* destinationsSaga() {
  yield takeLatest(fetchDestinations.type, handleFetchDestinations);
}
