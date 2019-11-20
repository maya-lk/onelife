import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commonReducer from './common/common.reducer';
import servicesReducer from './services/services.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['']
}

const rootReducer = combineReducers({
    commonParams : commonReducer,
    services : servicesReducer
});

export default persistReducer(persistConfig, rootReducer);