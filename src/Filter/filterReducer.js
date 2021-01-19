const initialState = {
    organization: 130950,
    system: '',
    dateRange: 'lastMonth'
}

export const QuickDateRangeFilters = {
    lastThreeDays: 'Last 3 days',
    lastSevenDays: 'Last 7 days',
    lastMonth: 'Last month'
}

export const DateRangeValuesMap = {
    lastThreeDays: {
        range: 3,
        type: 'day'
    },
    lastSevenDays: {
        range: 7,
        type: 'days'
    },
    lastMonth: {
        range: 1,
        type: 'month'
    }
}

export const dateRangeType = {
    days:'days',
    month: 'month'
}

export const orgChanged = org => {
    return {
        type: 'orgChanged',
        payload: org
    }
}

export const sysChanged = sys => {
    return {
        type: 'sysChanged',
        payload: sys
    }
}

export const datesChanged = range => {
    return {
        type: 'dateRangeChanged',
        payload: range
    }
}

export default function filterReducer(state = initialState, action) {
    switch(action.type) {
        case 'orgChanged': {
            return { 
                ...state,
                organization: action.payload 
                }
        }
        case 'sysChanged': {
            return { 
                ...state,
                system: action.payload
            }
        }
        case 'dateRangeChanged':
            return {
                ...state,
                dateRange: action.payload,
            }
        default:
            return state;
    }
}