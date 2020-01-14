import { takeEvery } from 'redux-saga/effects'

import {sagas as index} from 'pages/index/'
import {sagas as scene} from 'pages/Scene/index.js'
import {sagas as tour} from 'pages/Tour/'
import * as search from '@/searchTop/sagas'
function* sagas() {
  yield takeEvery("load", index.loadDate);
  yield takeEvery("SceneList", scene.loadDate);
  yield takeEvery("Nav", tour.loadDate);
  yield takeEvery("search", search.loadDate);
}

export default sagas