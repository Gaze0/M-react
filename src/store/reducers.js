import { combineReducers } from 'redux'

import { reducers as index } from 'pages/index'
import { reducers as scene } from 'pages/Scene'
import { reducers as navList } from 'pages/Tour'
import searchList from '@/searchTop/reducer'

export default combineReducers({
    index,
    scene,
    navList,
    searchList
})