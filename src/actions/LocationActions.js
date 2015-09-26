import * as types from '../constants/ActionTypes';

export function searchLocation(locationName) {
  return {
    type: types.SEARCH_LOCATION,
    locationName
  };

export function fetchLocationsRequest(locationName) {
  return {
    type: types.FETCH_LOCATIONS_REQUEST,
  }
}

export function fetchLcationsFailure(locationName) {
  return {
    type: types.FETCH_LOCATIONS_FAILURE,
    error: 'Oops'
  }
}

export function fetchLOcationsSucces(response) {
  return {
    type: types.FETCH_LOCATIONS_SUCCESS,
    response

  }
}
