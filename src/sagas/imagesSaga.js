import { call, select, takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}