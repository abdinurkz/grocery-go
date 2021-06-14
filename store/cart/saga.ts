import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'
import * as constants from './types'
import * as actions from './actions'
import { addToCart, getUserCart } from '../../api/cart'

function* getUserCartSaga() {
    try {
        const response = yield call(getUserCart)
        yield put(actions.getUserCartSuccess(response))

    } catch (error) {
        yield put(actions.getUserCartFailure(error.response.data))
    }
}

function* addToCartSaga({ payload: { id, navigation } }) {
    try {
        const response = yield call(addToCart, id)
        yield put(actions.addToCartSuccess(response))
        yield put(actions.getUserCart())
        navigation.navigate("Cart")
    } catch (error) {
        yield put(actions.addToCartFailure(error.response.data))
    }
}




function* cartSaga() {
    yield takeLatest(constants.ADD_TO_CART, addToCartSaga)
    yield takeLatest(constants.GET_USER_CART, getUserCartSaga)
}

export default cartSaga