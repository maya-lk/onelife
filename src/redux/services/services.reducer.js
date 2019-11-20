import { 
    servicesActionTypes } from './services.types';

const INITIAL_STATE = {
    services : null
}

const servicesReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case servicesActionTypes.SET_SERVICES:
            return{
                ...state,
                services : action.payload
            }
        default:
            return state;
    }
}

export default servicesReducer;