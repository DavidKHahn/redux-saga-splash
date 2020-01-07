import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

// whenever a saga comes across a promise it will then pause until promise is completed
function* handleImagesLoad() {
    console.log('Fetching images from Unsplash');
}

function* handleDang() {
    console.log('handleDang!!');
}

// watcher saga
function* rootSaga() {
    // takeEvery is nonblocking where as take is blocking
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
    yield takeEvery('DANG', handleDang);
}

// watcher saga listens for an action then invoke worker saga

export default rootSaga;