import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalForm from "./ModalForm";
import ModalShadle from "./ModalShadle";

class ModalItem extends Component {
  render() {
    const {
      itemIdOfState
    } = this.props;
    console.log(this.props);
    let dialogInner;

    switch (itemIdOfState) {
      case 'redux-modals-1':
        dialogInner = <ModalForm/>;
        console.log(itemIdOfState);
        break;
      case 'redux-modals-2':
        dialogInner = <ModalShadle/>;
        console.log(itemIdOfState);
        break;
      default:
        return null;
    }
    return (
      <div>
        {dialogInner}
      </div>
    )
  }
}

ModalItem.propTypes = {
  itemIdOfState: PropTypes.string.isRequired
};
export default ModalItem;