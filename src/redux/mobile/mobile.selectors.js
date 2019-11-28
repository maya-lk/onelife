import { createSelector } from 'reselect';

const selectMobileAPI = state => state.mobile;

export const selectMobileHidden = createSelector(
    [selectMobileAPI],
    (mobile) => mobile.mobileHidden
);