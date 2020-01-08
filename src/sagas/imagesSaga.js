import { select, takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    const page = yield select(getPage);
    console.log('page', page);
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}