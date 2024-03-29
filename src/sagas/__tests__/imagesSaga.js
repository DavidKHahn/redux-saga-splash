import { runSaga } from 'redux-saga';
import { setError, setImages } from '../../actions';
import * as api from '../../api';
import { getPage, handleImagesLoad } from '../imagesSaga';
test('selector gives back the page', () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);
    expect(res).toBe(nextPage);
});

test('should load images and handle them in case of success', async () => {
    // dispatched actions
    const dispatchedActions = [];
    // mocked function use
    const mockedImages = ['abc', 'div'];
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages));

    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedActions.push(action)
    }
    await runSaga(fakeStore, handleImagesLoad).done;
    // assertions
    // mock functions should have been invoked only once
    expect(api.fetchImages.mock.calls.length).toBe(1);
    // assert that this action was dispatched for setImages
    // dispatching mockedImages
    expect(dispatchedActions).toContainEqual(setImages(mockedImages));
})

test('should handle errors in case of failure', async () => {
    // dispatched actions
    const dispatchedActions = [];
    // mocked function use
    const error = 'Some error is thrown';
    api.fetchImages = jest.fn(() => Promise.reject(error));

    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedActions.push(action)
    }
    await runSaga(fakeStore, handleImagesLoad).done;
    // assertions
    // mock functions should have been invoked only once
    expect(api.fetchImages.mock.calls.length).toBe(1);
    // assert that this action was dispatched for setError
    // dispatch error
    expect(dispatchedActions).toContainEqual(setError(error));
})