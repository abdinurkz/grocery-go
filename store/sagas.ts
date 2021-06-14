import { all } from 'redux-saga/effects'
import authSaga from './auth/saga'
import cartSaga from './cart/saga'
import storeSaga from './market/saga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        cartSaga(),
        storeSaga()
    ]);
}
