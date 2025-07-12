import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../api/axiosInstance';
import { push } from 'redux-first-history';
import {
    fetchHotels,
    fetchHotelsSuccess,
    fetchHotelsFailure,
} from './hotelsSlice';

function* handleFetchHotels({ payload }) {
    try {
        const { data } = yield call(axios.get, '/hotels', { params: /*payload*/{ city: payload.destinationLabel } });
        yield put(fetchHotelsSuccess(data));
        yield put(push('/hotels'));
    } catch (error) {
        yield put(fetchHotelsFailure(error.message));
    }
}

export default function* hotelsSaga() {
    yield takeLatest(fetchHotels.type, handleFetchHotels);
}
