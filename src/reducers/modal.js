import {
    GET_MODAL_CONFIG,
    OPEN_MODAL,
} from '../actions';


const initialState = {
    modalConfig: {
        itemTitle: "",
        focusedItem: null,
        mode: "",
        title: ""
    },
    isModalOpen: false,
};

const modal = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_MODAL_CONFIG:
            return Object.assign({}, state, {modalConfig: action.modalConfig});

        case OPEN_MODAL:
            return Object.assign({}, state, {isModalOpen: !state.isModalOpen});

        default:
            return state;
    }
};

export default modal;
