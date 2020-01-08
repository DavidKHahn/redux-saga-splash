import { call, fork, put, take } from 'redux-saga/effects';
import { loadImagesStats, setImagesStats, setImagesStatsError } from '../actions';
import { fetchImageStats } from '../api';
import { IMAGES } from '../constants';

function* handleStatsRequest(id) {
    // makes requests to load/fetch image stats
    // runs iteration 3x at the most and fails if does not pass after 3 iterations
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImagesStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImagesStats(id, res.downloads.total));
            return true;
        } catch (e) { }
    }

    yield put(setImagesStatsError(id));
}


export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            // fork will run sagas in parallel
            // call would have suspended until particular saga has run
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}