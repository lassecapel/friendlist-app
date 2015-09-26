import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './FriendListApp.css';

import * as FriendsActions from '../actions/FriendsActions';
import * as MapActions from '../actions/MapActions';
import { FriendList, AddFriendInput, Map, SearchLocationInput} from '../components';

class FriendListApp extends Component {
  static propTypes = {
    mapConfig: PropTypes.object.isRequired,
    friendlist: PropTypes.object.isRequired,
    locationlist: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const {
      friendlist: { friendsById },
      locationlist,
      mapConfig,
      dispatch,
    } = this.props;

    const friendActions = bindActionCreators(FriendsActions, dispatch);
    const mapActions = bindActionCreators(MapActions, dispatch);

    return (
      <div>
        <div className={styles.friendListApp}>
          <h1>The FriendList</h1>
          <AddFriendInput addFriend={friendActions.addFriend} />
          <FriendList friends={friendsById} actions={friendActions} />
        </div>
        <div className={styles.friendListMap}>
          <SearchLocationInput searchLocation={() => console.log("search")} />
          <Map center={mapConfig.center} zoom={mapConfig.zoom}/>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    friendlist: state.friendlist,
    mapConfig: state.mapConfig,
    locationlist: state.locationlist
  }
}


export default connect(select)(FriendListApp);
