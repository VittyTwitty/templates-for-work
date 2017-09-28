import {
  ADD_MODAL_TO_VIEW,
  DELETE_MODAL_TO_VIEW
} from "../constants/Modal";

const initialState = {
  isOpenModal: false,
  buttonId: ''
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case ADD_MODAL_TO_VIEW:
      return {
        ...state,
        isOpenModal: true,
        buttonId: action.payload
      };
    case DELETE_MODAL_TO_VIEW:
      return {
        ...state,
        isOpenModalL: false
      };
    default:
      return state
  }
}