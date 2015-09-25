import React, {PropTypes, Component} from 'react/addons';
import GoogleMap from 'google-map-react';

export default class SimpleMapPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        center={this.props.center}
        zoom={this.props.zoom}>
      </GoogleMap>
    );
  }
}
