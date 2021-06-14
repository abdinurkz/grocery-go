import * as constants from './types'



export const loginUser = (user, navigation) => ({
    type: constants.LOGIN_USER,
    payload: { user, navigation }
})
export const loginUserSuccess = user => ({
    type: constants.LOGIN_USER_SUCCESS,
    payload: user
})
export const loginUserFailure = error => ({
    type: constants.LOGIN_USER_FAILURE,
    payload: error
})


export const registerUser = (user, navigation) => ({
    type: constants.REGISTER_USER,
    payload: { user, navigation }
})
export const registerUserSuccess = user => ({
    type: constants.REGISTER_USER_SUCCESS,
    payload: user
})
export const registerUserFailure = error => ({
    type: constants.REGISTER_USER_FAILURE,
    payload: error
})