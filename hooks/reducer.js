import { useReducer } from 'react';
import {
    OPEN_MODAL_ACTION,
    CLOSE_MODAL_ACTION,
    CLOSE_MODAL_ACTION_CUSTOM,
    OPEN_MODAL_ACTION_CUSTOM
} from '../constants/actions';

export const useAppReducer = () => {
    const initialState = { isModalOpen: false, isModalCutsomOpen: false };

    const reducer = (state, action) => {
        switch (action.type) {
            case OPEN_MODAL_ACTION.type:
                return { isModalOpen: action.payload };
            case CLOSE_MODAL_ACTION.type:
                return { isModalOpen: action.payload };
            case CLOSE_MODAL_ACTION_CUSTOM.type:
                return { isModalCutsomOpen: action.payload };
            case OPEN_MODAL_ACTION_CUSTOM.type:
                return { isModalCutsomOpen: action.payload };
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return { state, dispatch };
};