import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    siteLogo : null,
    logoSubtext : null,
    mainImage : null,
    mainContent : null,
    address: null,
    email : null,
    contactNo : null,
    linkedinLink : null,
    bioSection : null,
    ownersBuilderPdf : null,
    menus : null,
    googleCalender : null,
    bioImage : null,
    calenderAPI : null,
    zoomID : null,
    zoomName : null,
    resourcesTitle : null,
    topText : null,
    resources : null
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
        case commonActionTypes.SET_LINKEDIN_URL:
            return{
                ...state,
                linkedinLink : action.payload
            }
        case commonActionTypes.SET_BIO_SECTION:
            return{
                ...state,
                bioSection : action.payload
            }
        case commonActionTypes.SET_OWNER_PDF:
            return{
                ...state,
                ownersBuilderPdf : action.payload
            }
        case commonActionTypes.SET_MENUS:
            return{
                ...state,
                menus : action.payload
            }
        case commonActionTypes.SET_GOOGLE_CALENDER:
            return{
                ...state,
                googleCalender : action.payload
            }
        case commonActionTypes.SET_BIO_IMAGE:
            return{
                ...state,
                bioImage : action.payload
            }
        case commonActionTypes.SET_CALENDER_API:
            return{
                ...state , 
                calenderAPI : action.payload
            }
        case commonActionTypes.SET_ZOOM_ID:
            return{
                ...state ,
                zoomID : action.payload
            }
        case commonActionTypes.SET_ZOOM_NAME:
            return{
                ...state,
                zoomName : action.payload
            }
        case commonActionTypes.SET_RESOURCES_TITLE:
            return{
                ...state,
                resourcesTitle : action.payload
            }
        case commonActionTypes.SET_TOP_TEXT:
            return {
                ...state,
                topText : action.payload
            }
        case commonActionTypes.SET_RESOURCES:
            return {
                ...state,
                resources : action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;