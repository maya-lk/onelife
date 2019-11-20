import { createSelector } from 'reselect';

const selectServicesAPI = state => state.services;

export const selectServices = createSelector(
    [selectServicesAPI],
    (services) => services
);