
import { createSelector } from 'reselect'
import { normalize, schema } from 'normalizr'
import { act } from 'react-dom/test-utils'

const initialState = {
    data: [],
    orgs: {}
}

export default function activityReducer(state = initialState, action) {
    switch(action.type) {
        case 'fetchAll': {
            return action.payload
        }
        case 'getAll': {
            return state
        }
        default:
            return state
    }
}

export const fetchAll = activities => {
    return {
        type: 'fetchAll', 
        payload: activities 
    }
}

export const normalizedData = result => {
    const org = new schema.Entity('organizations');
    const mySchema = [{ organizations: [org] }];
    const normalizedData = normalize(result, mySchema);
    return {
        data: normalizedData.result, 
        orgs: normalizedData.entities.organizations
    }
}

export async function fetchActivities(dispatch, getState) {
    fetch('https://fast-dusk-45749.herokuapp.com/activities')
    .then(res => res.json())
    .then(
        (result) => {
            dispatch(fetchAll(normalizedData(result)))
        }
    )
}

export const getDurationByOrgAndSystem = createSelector(
    state => state.activities,
    state => state.filters,
    (activities, filters) => {
        const test = activities.data.filter(entry => entry.organizations.indexOf(Number(filters.organization))>-1)
        return test
    }
)

export const organizationsMap = createSelector(
    state => state.activities,
    (activities) => {
        return activities.orgs
    }
)