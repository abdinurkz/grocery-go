import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'
import * as constants from './types'
import * as actions from './actions'
import { login, register } from '../../api/auth'
import { save } from '../../helpers/persist'

function* loginUser({ payload: { user, navigation } }) {
    try {
        const response = yield call(login, {
            email: user.email,
            password: user.password,
        })
        yield put(actions.loginUserSuccess(response))
        save("go", response.token)
        
        navigation.navigate("Main")
    } catch (error) {
        yield put(actions.loginUserFailure(error.response.data.message))
    }
}

function* registerUser({ payload: { user, navigation } }) {
    try {
        const response = yield call(register, {
            name: user.name,
            email: user.email,
            password: user.password,
        })
        
        yield put(actions.registerUserSuccess(response))
        
        navigation.navigate("Login")
    } catch (error) {
        yield put(actions.registerUserFailure(error.response.data.message))
    }
}

function* authSaga() {
    yield takeEvery(constants.LOGIN_USER, loginUser)
    yield takeLatest(constants.REGISTER_USER, registerUser)
}

export default authSaga