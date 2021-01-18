import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { getDurationByOrgAndSystem } from './activityReducer'

const ActivityView = () => {

    const activities = useSelector(getDurationByOrgAndSystem);
    const { organization, system, dateRange } = useSelector((state) => state.filters)
    console.log(system)
    const items = activities.filter(item => item.system.toLowerCase().includes(system))
    const itemsRendered = items.map((item, index) => {
        return <div className='activity-item' key={index}>
                    <span>{item.system}</span>
                    <span>5%</span>
                    </div>
    })
    return <div>
            {itemsRendered}
        </div>
}

export default ActivityView