import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_GET_RANKS_BEGIN,
  HOME_GET_RANKS_SUCCESS,
  HOME_GET_RANKS_FAILURE,
  HOME_GET_RANKS_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  getRanks,
  dismissGetRanksError,
  reducer,
} from '../../../../src/features/home/redux/getRanks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getRanks', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getRanks succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getRanks())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_RANKS_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_RANKS_SUCCESS);
      });
  });

  it('dispatches failure action when getRanks fails', () => {
    const store = mockStore({});

    return store.dispatch(getRanks({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_RANKS_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_RANKS_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetRanksError', () => {
    const expectedAction = {
      type: HOME_GET_RANKS_DISMISS_ERROR,
    };
    expect(dismissGetRanksError()).toEqual(expectedAction);
  });

  it('handles action type HOME_GET_RANKS_BEGIN correctly', () => {
    const prevState = { getRanksPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_RANKS_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getRanksPending).toBe(true);
  });

  it('handles action type HOME_GET_RANKS_SUCCESS correctly', () => {
    const prevState = { getRanksPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_RANKS_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getRanksPending).toBe(false);
  });

  it('handles action type HOME_GET_RANKS_FAILURE correctly', () => {
    const prevState = { getRanksPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_RANKS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getRanksPending).toBe(false);
    expect(state.getRanksError).toEqual(expect.anything());
  });

  it('handles action type HOME_GET_RANKS_DISMISS_ERROR correctly', () => {
    const prevState = { getRanksError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_RANKS_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getRanksError).toBe(null);
  });
});

