import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

// whenever a saga comes across a promise it will then pause until promise is completed
function* handleImagesLoad() {
    console.log('Fetching images from Unsplash');
}

// watcher saga
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

// watcher saga listens for an action then invoke worker saga

export default rootSaga;