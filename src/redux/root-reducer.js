// jshint esversion:6
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// storage represents local storage, sessionStorage represents session storage
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collection/collection.reducer';

// key is the entry point fives therom where we start persisting state, root is the 
// bottom level. storage is object that gives method of 
// Only persist the cart reducer since the user reducer is being stored 
// by firebase auth.
const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    collection: collectionReducer
});

export default persistReducer(persistConfig, rootReducer);