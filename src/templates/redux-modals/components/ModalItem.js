import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalItem extends Component {
  render() {
    const {
      buttonId,
      isOpenModal
    } = this.props;
    console.log('BUTTON ID', buttonId);
    switch (buttonId) {
      case 'dfdfdf':
        return (
          <div>
            {
              isOpenModal ? <div>MODAL 1</div> : ''
            }
          </div>
        );
      default:
        return (
          <div>
            {
              isOpenModal ? <div>MODAL 2</div> : ''
            }
          </div>
        )
    }
  }
}

ModalItem.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  buttonId: PropTypes.string.isRequired
};
export default ModalItem;