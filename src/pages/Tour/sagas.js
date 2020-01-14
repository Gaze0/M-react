import {  put } from 'redux-saga/effects'
import { post } from 'utils/http'
function* loadDate(action) {
    console.log(action.data)
    try {
        const result = yield post({
            url: action.url,
            data:action.data
          })
          console.log(result)
       yield put({type: "NavList", data: result.data.logos});
    } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

export {
    loadDate
} 