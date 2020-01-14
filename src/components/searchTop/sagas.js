import { put } from 'redux-saga/effects'
import { post } from 'utils/http'
function* loadDate(action) {
    try {
        const result = yield post({
            url: action.url,
            data: action.data
        })
        console.log(result)
        yield put({
            type: "searchList",
            data: result.data.data,
            val: action.val,
            isfocus: action.isfocus
        });
    } catch (e) {
        //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export {
    loadDate
} 