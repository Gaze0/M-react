import {  put } from 'redux-saga/effects'
// import { get } from 'utils/http'
function* loadDate(action) {
    console.log(789)
    try {
        console.log(123)
        console.log(action)
        // const result = yield get({
        //     url: action.url
        //   })
       yield put({type: "scene", data: '123'});
    } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

export {
    loadDate
} 