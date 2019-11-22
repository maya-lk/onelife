import { createSelector } from 'reselect';

const selectServicesAPI = state => state.serviceList;

export const selectServices = createSelector(
    [selectServicesAPI],
    (serviceList) => serviceList.services
);