import React, {Component} from 'react';
import MapWithControlledZoom from "./ControlledMap";

class VitMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.addressData
    };
  }

  render() {
    return (
      <div>
        <MapWithControlledZoom address={this.state.address}/>
      </div>
    );
  }
}

export default VitMap;