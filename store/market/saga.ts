import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'
import * as constants from './types'
import * as actions from './actions'
import { getStores } from '../../api/store'

function* getStoresSaga() {
    try {
        const response = yield call(getStores)
        yield put(actions.getStoresSuccess(response))

    } catch (error) {
        yield put(actions.getStoresFailure(error.response.data))
    }
}





function* storeSaga() {
    yield takeEvery(constants.GET_STORES, getStoresSaga)
}

export default storeSaga