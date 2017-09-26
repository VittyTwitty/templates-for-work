import React, {Component} from 'react';
import Modals from "./Modals";

class ModalsWrapper extends Component {
  constructor() {
    super();
    this.state = {
      isOpenModal: false
    }
  }

  onOpenModal(e) {
    console.log(e.target)
    this.setState({
      isOpenModal: !this.state.isOpenModal
    })
  }

  render() {
    const isOpenModal = this.state.isOpenModal;
    console.log(isOpenModal);
    return (
      <div>

        <button
          className='scheduleShowing'
          onClick={(e) => this.onOpenModal(e)}
        >Go to modal
        </button>

        {
          isOpenModal ? <Modals/> : null
        }
      </div>
    )
  }
}

export default ModalsWrapper;