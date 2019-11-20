import { servicesActionTypes } from './services.types';

export const setServices = services => ({
    type : servicesActionTypes.SET_SERVICES,
    payload : services
})