import { call, put, take } from 'redux-saga/effects';
// whenever a saga comes across a promise it will then pause until promise is completed
function* workerSaga() {
    console.log('Hey from worker');
    console.log(put({ type: 'ACTION_FROM_WORKER' }))
    yield put({ type: 'ACTION_FROM_WORKER' });
}

function* byebyeSaga() {
    console.log('Bye bye');
}
// watcher saga
function* rootSaga() {
    // take is useful for one calls such as LOGIN and does not have a callback
    yield take('LOGIN');
    yield call(workerSaga);
    // yield take('ADD_TO_CART');
    // yield take('BUY');
    yield take('LOGOUT');
    yield call(byebyeSaga);
}

// watcher saga listens for an action then invoke worker saga

export default rootSaga;