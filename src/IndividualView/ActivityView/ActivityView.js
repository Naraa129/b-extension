import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { getDurationByOrgAndSystem } from './activityReducer'

const ActivityView = () => {

    const activities = useSelector(getDurationByOrgAndSystem);
    
    const items = activities.map((item, index) => {
        if(item.organizations.length > 1)
            console.log(item.organizations);
        return <div className='activity-item' key={index}>
                    <span>{item.system}</span>
                    <span>5%</span>
                    </div>
    })
    return <div>
            {items}
        </div>
}

export default ActivityView