// action - state management
import * as actionTypes from './actions';

export const initialState = { auth: false };

// ==============================|| USER REDUCER ||============================== //

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
