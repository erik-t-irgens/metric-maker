import {
    ADD_METRIC, ADD_METRIC_GROUP, REMOVE_METRIC, REMOVE_METRIC_GROUP, CLEAR_METRICS, CHANGE_THEME
} from './types'

// METRIC GROUP ALTERATION



export const addMetricGroup = (newGroup) => ({
    type: ADD_METRIC_GROUP,
    payload: { newGroup }
})

export const removeMetricGroup = (groupToRemove) => ({
    type: REMOVE_METRIC_GROUP,
    payload: { groupToRemove }
})



export const addMetric = (newMetric) => ({
    type: ADD_METRIC,
    payload: { newMetric }
})


export const removeMetric = (metricToRemove) => ({
    type: REMOVE_METRIC,
    payload: { metricToRemove }
})

export const clearMetrics = (metricsToClear) => ({
    type: CLEAR_METRICS,
    payload: { metricsToClear }
})

export const changeTheme = (theme) => ({
    type: CHANGE_THEME,
    payload: { theme }
})