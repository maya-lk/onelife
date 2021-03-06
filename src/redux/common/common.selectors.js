import { createSelector } from 'reselect';

const selectCommonAPI = state => state.commonParams;

export const selectSiteLogo = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.siteLogo
);

export const selectLogoSubtext = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.logoSubtext
);

export const selectMainImage = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.mainImage
);

export const selectMainContent = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.mainContent
);

export const selectAddress = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.address
);

export const selectEmail = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.email
);

export const selectContactNo = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.contactNo
);

export const selectLinkedinLink = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.linkedinLink
);

export const selectBioSection = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.bioSection
);

export const selectOwnersBuilderPdf = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.ownersBuilderPdf
);

export const selectMenus = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.menus
);

export const selectGoogleCalender = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.googleCalender
);

export const selectBioImage = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.bioImage
);

export const selectCalenderAPI = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.calenderAPI
);

export const selectZoomID = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.zoomID
);

export const selectZoomName = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.zoomName
);

export const selectResourcesTitle = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.resourcesTitle
);

export const selectTopText = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.topText
);

export const selectResources = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.resources
);

export const selectMainLoading = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.mainLoading
);

export const selectSiteTitle = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.siteTitle
);

export const selectSiteDescription = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.siteDescription
);