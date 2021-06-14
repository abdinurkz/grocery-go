import { combineReducers } from 'redux'

import Auth from './auth/reducer'
import Cart from './cart/reducer'
import Store from './market/reducer'


export default combineReducers({
    Auth,
    Cart,
    Store
});
