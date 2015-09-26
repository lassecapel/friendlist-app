import * as types from '../constants/ActionTypes';

export function setCoordinates(center) {
  return {
    type: types.SET_COORDINATES,
    center
  };
}

export function setZoom(zoom) {
  return {
    type: types.SET_ZOOM,
    zoom
  };
}
