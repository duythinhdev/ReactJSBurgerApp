import { takeEvery, all, takeLatest } from "redux-saga/effects";

import  * as actionTypes from '../actions/actionsTypes';
 import {
     checkAuthTimeoutSaga,
        logoutSaga,
     authUserSaga,
     authcheckStateSaga,

} from './auth';
import  { initIngredientsSaga } from  './burgerBuilder';
import  { purchaseBurgerSaga,fetchOrdersSaga } from  './order';
export function* watchAuth() {
    yield all ( [
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
     takeEvery(actionTypes.AUTH_INITITATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER , authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE , authcheckStateSaga),
    ]);

}

export  function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export  function* watchOrder() {
    yield takeLatest(actionTypes.PUCHASE_BURGER , purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS , fetchOrdersSaga);
}