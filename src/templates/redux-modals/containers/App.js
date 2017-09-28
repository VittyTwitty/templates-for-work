import React, {Component} from 'react';
import ModalItem from "../components/ModalItem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as modalActions from '../actions/ModalsActions'
import ButtonShow from "../components/ButtonShow";

class App extends Component {
  render() {
    const {
      isOpenModal,
      buttonId
    } = this.props.modals;
    const {
      addModalsToView
    } = this.props.modalActions;
    console.log('modalActions', modalActions);
    return (
      <div>
        <ButtonShow
          buttonId={buttonId}
          addModalsToView={addModalsToView}
          isOpenModal={isOpenModal}
        />
        <ModalItem
          isOpenModal={isOpenModal}
          buttonId={buttonId}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  }
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);