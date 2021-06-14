import * as constants from './types'


const initialState = {
    error: '',
    loading: false,
    user: {}
}


const login = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN_USER:
        case constants.REGISTER_USER:
            return {
                ...state,
                loading: true
            }
        case constants.LOGIN_USER_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                user: action.payload
            }
        case constants.REGISTER_USER_SUCCESS:    
            return {
                ...state,
                error: '',
                loading: false,
            }
        case constants.LOGIN_USER_FAILURE:
        case constants.REGISTER_USER_FAILURE:     
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default login