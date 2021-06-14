import * as constants from './types'

export const getStores = () => ({
    type: constants.GET_STORES
})
export const getStoresSuccess = stores => ({
    type: constants.GET_STORES_SUCCESS,
    payload: stores
})
export const getStoresFailure = error => ({
    type: constants.GET_STORES_FAILURE,
    payload: error
})