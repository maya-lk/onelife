import { mobileActionTypes } from './mobile.types';

const INITIAL_STATE = {
    mobileHidden : false
}

const mobileReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case mobileActionTypes.SET_MOBILE_HIDDEN:
            return{
                ...state,
                mobileHidden : !state.mobileHidden
            }
        default:
            return state;
    }
}

export default mobileReducer;