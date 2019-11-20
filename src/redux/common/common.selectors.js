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