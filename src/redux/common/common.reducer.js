import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    siteLogo : null,
    logoSubtext : null,
    mainImage : null,
    mainContent : null,
    address: null,
    email : null,
    contactNo : null,
}

const commonReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case commonActionTypes.SET_SITE_LOGO:
            return{
                ...state,
                siteLogo : action.payload
            }
        case commonActionTypes.SET_LOGO_SUBTEXT:
            return{
                ...state,
                logoSubtext : action.payload
            }
        case commonActionTypes.SET_MAIN_IMAGE_URL:
            return{
                ...state,
                mainImage : action.payload
            }
        case commonActionTypes.SET_MAIN_CONTENT:
            return{
                ...state,
                mainContent : action.payload
            }
        case commonActionTypes.SET_ADDRESS:
            return{
                ...state,
                address : action.payload
            }
        case commonActionTypes.SET_EMAIL:
            return{
                ...state,
                email : action.payload
            }
        case commonActionTypes.SET_CONTACT_NO:
            return{
                ...state,
                contactNo : action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;