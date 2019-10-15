import initialState from './initialState';
import { reducer as getTestReducer } from './getTest';
import { reducer as getRanksReducer } from './getRanks';
import { reducer as getCommentsReducer } from './getComments';

const reducers = [
  getTestReducer,
  getRanksReducer,
  getCommentsReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
