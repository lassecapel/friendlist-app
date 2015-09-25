import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './FriendListApp.css';

import * as FriendsActions from '../actions/FriendsActions';
import * as MapActions from '../actions/MapActions';
import { FriendList, AddFriendInput, Map } from '../components';

class FriendListApp extends Component {
  static propTypes = {
    map: PropTypes.object.isRequired,
    friendlist: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const {
      friendlist: { friendsById },
      dispatch,
      map
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
          <Map center={map.center} zoom={map.zoom}/>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    friendlist: state.friendlist,
    map: state.map
  }
}


export default connect(select)(FriendListApp);
