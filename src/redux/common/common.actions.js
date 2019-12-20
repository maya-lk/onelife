import { commonActionTypes } from './common.types';

export const setSiteLogo = siteLogo => ({
    type : commonActionTypes.SET_SITE_LOGO,
    payload : siteLogo
});

export const setLogoSubtext = logoSubtext => ({
    type : commonActionTypes.SET_LOGO_SUBTEXT,
    payload : logoSubtext
});

export const setMainImage = mainImage => ({
    type : commonActionTypes.SET_MAIN_IMAGE_URL,
    payload : mainImage
});

export const setMainContent = mainContent => ({
    type : commonActionTypes.SET_MAIN_CONTENT,
    payload : mainContent
});

export const setAddress = address => ({
    type : commonActionTypes.SET_ADDRESS,
    payload : address
});

export const setEmail = email => ({
    type : commonActionTypes.SET_EMAIL,
    payload : email
});

export const setContactNo = contactNo => ({
    type : commonActionTypes.SET_CONTACT_NO,
    payload : contactNo
});

export const setLinkedinLink = linkedinLink => ({
    type : commonActionTypes.SET_LINKEDIN_URL,
    payload : linkedinLink
});

export const setBioSection = bioSection => ({
    type : commonActionTypes.SET_BIO_SECTION,
    payload : bioSection
});

export const setMenus = menus => ({
    type : commonActionTypes.SET_MENUS,
    payload : menus
});

export const setOwnersBuilderPdf = ownersBuilderPdf => ({
    type : commonActionTypes.SET_OWNER_PDF,
    payload : ownersBuilderPdf
});

export const setGoogleCalender = googleCalender => ({
    type : commonActionTypes.SET_GOOGLE_CALENDER,
    payload : googleCalender
});

export const setBioImage = bioImage => ({
    type : commonActionTypes.SET_BIO_IMAGE,
    payload : bioImage
});

export const setCalenderAPI = calenderAPI => ({
    type : commonActionTypes.SET_CALENDER_API,
    payload : calenderAPI
});

export const setZoomID = zoomID => ({
    type : commonActionTypes.SET_ZOOM_ID,
    payload : zoomID
});

export const setZoomName = zoomName => ({
    type : commonActionTypes.SET_ZOOM_NAME,
    payload : zoomName
});