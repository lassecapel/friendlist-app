import * as types from '../constants/ActionTypes';

const initialState = {

};

export default function map(state = initialState, action) {
  switch (action.type) {

    case types.SEARCH_LOCATION:
      return state;

    default:
      return state;
  }
}


// https://www.local.bol.com/nl/chckout/pickup_points.html?postalcode=1112+JA&country=NL&hasSameDay=true
