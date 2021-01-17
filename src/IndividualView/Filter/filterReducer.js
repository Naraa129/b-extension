const initialState = {
    organization: 130950,
    system: 'Gmail',
    dateRange: '3' //past 3 days
}

export const orgChanged = org => {
    return {
        type: 'orgChanged',
        payload: org
    }
}

export default function filterReducer(state = initialState, action) {
    switch(action.type) {
        case 'orgChanged': {
            return { organization: action.payload}
        }
        default:
            return state;
    }
}