import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getDurationByOrgAndSystem } from './activityReducer'
import { DateRangeValuesMap, dateRangeType, datesChanged } from '../Filter/filterReducer'

export const getStartDate = (end, dateRange) => {
    const endDate = new Date(end)
    let start = DateRangeValuesMap[dateRange].type !== dateRangeType.month ? 
        endDate.setDate(endDate.getDate() - DateRangeValuesMap[dateRange].range) : 
        endDate.setMonth(endDate.getMonth() - DateRangeValuesMap[dateRange].range)
    return new Date(start)
}

export const getComputedItems = (datesApplied) => {
    let mapValues = {}
    let total = 0
    datesApplied.forEach((item) => {
    total += item.duration
    let isExist = mapValues.hasOwnProperty(item.system)
        if(isExist)
            mapValues[item.system] += item.duration
        else
            mapValues[item.system] = item.duration
    })
    mapValues.total = total
    return mapValues
}

const ActivityView = () => {
    const activities = useSelector(getDurationByOrgAndSystem);
    const { system, dateRange } = useSelector((state) => state.filters)

    // system filter applies
    const systemFilterApplied = system.trim().length > 0 ? 
        activities.filter(item => item.system.toLowerCase().includes(system)) : activities

    // date filter applies
    const today = '2020-01-14' //given the data, today is 2020-01-14
    const datesApplied = systemFilterApplied.filter(item => {
        const start = getStartDate(today, dateRange)
        const isRendered = start < new Date(item.date.split('T')[0])
        return isRendered
    })

    // compute the percentages of usage for each system 
    const computedData = getComputedItems(datesApplied)   

    const itemsRendered = Object.keys(computedData).map((key, index) => {
        const totalDuration = computedData.total
        const percentage = parseFloat((100*computedData[key])/totalDuration).toFixed(2) + '%'
        const heightStyle = { height: percentage}

        return totalDuration !== 0 && key !== 'total' ? <div className='activity-item' key={index}>
                    <div className='system-name'>
                        <div>{percentage}</div>
                        <div>{key}</div></div>
                    <div className='percentage' style={heightStyle}></div>
                    </div> : null
    })
    
    return <div>
            {itemsRendered}
        </div>
}

export default ActivityView