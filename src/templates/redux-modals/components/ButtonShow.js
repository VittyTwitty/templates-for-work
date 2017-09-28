import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ButtonShow extends Component {
  onOpenOneModal(e) {
    this.props.addModalsToView('dfdfdf');
  }
  render() {
    const {
      buttonId
    } = this.props;
    let buttonName;
    switch (buttonId) {
      case 'dfdfdf':
        buttonName = 'Кнопка 1';
        break;
      case 'dfdfdfdfdfdf':
        buttonName = 'Кнопка 2';
        break;
      default:
        buttonName = null
    }
    console.log('buttonId',buttonId);
    return (
      <button
        onClick={this.onOpenOneModal.bind(this)}
      >{buttonName}</button>
    )
  }
}

ButtonShow.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  addModalsToView: PropTypes.func.isRequired,

};
export default ButtonShow;