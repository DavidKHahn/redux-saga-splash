import { call, take } from 'redux-saga/effects';
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
    // with take IMAGES.LOAD must fire first for 'DANG' to run
    yield take(IMAGES.LOAD);
    yield call(handleImagesLoad);
    yield take('DANG');
    yield call(handleDang);
}

// watcher saga listens for an action then invoke worker saga

export default rootSaga;