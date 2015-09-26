import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../store_enhancers/devTools';

import { addFriend } from '../actions/FriendsActions';
import { setCoordinates } from '../actions/MapActions';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';


const reducer = combineReducers(reducers);
const store = createStore(reducer);
store.dispatch(addFriend("Lucky Luke"));
store.dispatch(setCoordinates([52.065414, 5.0885655]));

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <FriendListApp /> }
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}

export default App;
