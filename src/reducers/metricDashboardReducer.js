import { ADD_METRIC, ADD_METRIC_GROUP, REMOVE_METRIC, REMOVE_METRIC_GROUP, CLEAR_METRIC } from "../actions/types"

const initialState = {
    metrics: [

    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_METRIC: {
            state = {
                ...state,
                metrics
            }
        }
    }
}