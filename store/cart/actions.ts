import * as constants from './types'

export const addToCart = (id, navigation) => ({
    type: constants.ADD_TO_CART,
    payload: { id, navigation }
})
export const addToCartSuccess = user => ({
    type: constants.ADD_TO_CART_SUCCESS,
    payload: user
})
export const addToCartFailure = error => ({
    type: constants.ADD_TO_CART_FAILURE,
    payload: error
})


export const getUserCart = () => ({
    type: constants.GET_USER_CART
})
export const getUserCartSuccess = cart => ({
    type: constants.GET_USER_CART_SUCCESS,
    payload: cart
})
export const getUserCartFailure = error => ({
    type: constants.GET_USER_CART_FAILURE,
    payload: error
})