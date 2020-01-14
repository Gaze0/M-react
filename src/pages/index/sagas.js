import {  put } from 'redux-saga/effects'
import { get } from 'utils/http'
function* loadDate(action) {
    try {
        const result = yield get({
            url: action.url
        })
       yield put({type: "getState", data: result.module_list[0].module_data});
    } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

export {
    loadDate
} 