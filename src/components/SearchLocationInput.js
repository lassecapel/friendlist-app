import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
// import styles from './AddFriendInput.css';

export default class SearchLocationInput extends Component {
  static propTypes = {
    searchLocation: PropTypes.func.isRequired
  }

  render () {
    return (
      <input
        type="text"
        autoFocus="false"
        autoComplete="false"
        className={classnames('form-control')}
        placeholder="PostCode/Plaats"
        value={this.state.location}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.location || '',
    };
  }

  handleChange (e) {
    this.setState({ location: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.searchLocation(location);
      this.setState({ location: '' });
    }
  }

}
