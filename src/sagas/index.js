import { takeEvery } from 'redux-saga/effects';
// whenever a saga comes across a promise it will then pause until promise is completed
function* workerSaga() {
    console.log('Hey from worker');
}
// watcher saga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga);
}
// watcher saga listens for an action then invoke worker saga

export default rootSaga;