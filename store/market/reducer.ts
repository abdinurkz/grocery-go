import * as constants from './types'


const initialState = {
    error: '',
    loading: false,
    stores: []
}


const store = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_STORES:
            return {
                ...state,
                loading: true
            }
        case constants.GET_STORES_SUCCESS: 
            return {
                ...state,
                loading: false,
                stores: action.payload
            }
        case constants.GET_STORES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        default:
            return state
    }
}

export default store