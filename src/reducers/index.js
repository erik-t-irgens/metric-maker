import { combineReducers } from 'redux'

import metricDashboardReducer from './metricDashboardReducer'
import styleReducer from './styleReduer'

export default combineReducers({
    metricDashboard:
        metricDashboardReducer,
    style:
        styleReducer
})