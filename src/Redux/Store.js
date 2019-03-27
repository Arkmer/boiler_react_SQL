import { createStore, combineReducers } from 'redux';

const testReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TEST_REDUCER':
      console.log('Reducer: Success:', state);
      console.log('Action:', action);
      return state + 1;
    default:
      return state;
  }
}

const ageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REDUCER':
      console.log(action.payload);
      return state = action.payload;
    default:
      return state;
  }
}

const storeInstance = createStore(
  combineReducers({
    testReducer,
    ageReducer,
  }),
)

export default storeInstance;