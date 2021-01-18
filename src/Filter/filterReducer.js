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

export const sysChanged = sys => {
    return {
        type: 'sysChanged',
        payload: sys
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
        default:
            return state;
    }
}