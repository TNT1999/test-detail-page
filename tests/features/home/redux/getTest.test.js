import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_GET_TEST_BEGIN,
  HOME_GET_TEST_SUCCESS,
  HOME_GET_TEST_FAILURE,
  HOME_GET_TEST_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  getTest,
  dismissGetTestError,
  reducer,
} from '../../../../src/features/home/redux/getTest';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getTest', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getTest succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getTest())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_TEST_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_TEST_SUCCESS);
      });
  });

  it('dispatches failure action when getTest fails', () => {
    const store = mockStore({});

    return store.dispatch(getTest({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_TEST_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_TEST_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetTestError', () => {
    const expectedAction = {
      type: HOME_GET_TEST_DISMISS_ERROR,
    };
    expect(dismissGetTestError()).toEqual(expectedAction);
  });

  it('handles action type HOME_GET_TEST_BEGIN correctly', () => {
    const prevState = { getDataPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_TEST_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getDataPending).toBe(true);
  });

  it('handles action type HOME_GET_TEST_SUCCESS correctly', () => {
    const prevState = { getDataPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_TEST_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getDataPending).toBe(false);
  });

  it('handles action type HOME_GET_TEST_FAILURE correctly', () => {
    const prevState = { getDataPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_TEST_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getDataPending).toBe(false);
    expect(state.getDataError).toEqual(expect.anything());
  });

  it('handles action type HOME_GET_TEST_DISMISS_ERROR correctly', () => {
    const prevState = { getDataError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_TEST_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getDataError).toBe(null);
  });
});

