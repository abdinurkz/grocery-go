import * as constants from './types'


const initialState = {
    error: '',
    loading: false,
    cart: []
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_TO_CART:
        case constants.GET_USER_CART:
            return {
                ...state,
                loading: true
            }
        case constants.ADD_TO_CART_SUCCESS:
        case constants.ADD_TO_CART_FAILURE: 
        case constants.GET_USER_CART_FAILURE:   
            return {
                ...state,
                loading: false,
            }
        case constants.GET_USER_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload
            }    
        default:
            return state
    }
}

export default cart