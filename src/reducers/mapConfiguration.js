import * as types from '../constants/ActionTypes';

const initialState = {
  center: [53.065414, 5.0885655],
  zoom: 11
};

export default function map(state = initialState, action) {
  switch (action.type) {

    case types.SET_COORDINATES:
      return {
        ...state,
        center: action.center
        }
    default:
      return state;
  }
}
