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