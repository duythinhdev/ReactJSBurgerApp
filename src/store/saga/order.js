import axios from "../../axios-orders";
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import {fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess} from "../actions/order";

export  function* purchaseBurgerSaga(action)
{
    yield put (actions.purchaseBurgerStart());
    try{
        const reponse = yield  axios.post( '/orders.json?auth=' + action.token, action.orderData )
        yield put(actions.purchaseBurgerSuccess(reponse.data.name,action.orderData))
    }catch (error) {
        yield put(actions.purchaseBurgerFail(error))
    }
}
export  function* fetchOrdersSaga(action)
{
    yield put(actions.fetchOrdersStart());
    const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' +  action.userId + '"';
    try {
        const repsonse =  yield axios.get( '/orders.json' +  queryParams)
        const fetchedOrders = [];
        for ( let key in repsonse.data ) {
            fetchedOrders.push( {
                ...repsonse.data[key],
                id: key
            } );
        }
        console.log("123456789",repsonse.data)
        console.log("12345678910",actions.fetchOrdersSuccess(fetchedOrders))
        yield put(actions.fetchOrdersSuccess(fetchedOrders))
    }
    catch (error) {
        yield  put(actions.fetchOrdersFail(error))
    }
}
