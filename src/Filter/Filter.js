import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { organizationsMap } from '../ActivityView/activityReducer'
import { orgChanged, sysChanged, datesChanged, QuickDateRangeFilters } from '../Filter/filterReducer'

const Filter = () => {
    const [sys, setSys] = useState('')
    const dispatch = useDispatch()
    const { organization, dateRange } = useSelector((state) => state.filters)

    const orgsMap = useSelector(organizationsMap)

    const onOrgChange = (evt) => dispatch(orgChanged(evt.target.value))
    const onSysChange = (evt) => {
        if(evt.which === 13)
            dispatch(sysChanged(sys))
    }
    
    const handleSysChange = (evt) => setSys(evt.target.value)

    const onDatesChange = (value) => dispatch(datesChanged(value))

    const OrgFilter = ({ value: organization, onChange }) => {
        const filters = Object.keys(orgsMap).map((key) => {
            const orgObject = orgsMap[key]
            return (
                <option value={orgObject.id}>{orgObject.name}</option>
            )
        })
        return (
            <div className='filter'>
                <label for='orgList'>Organization</label>
                <select name='orgList' value={organization} onChange={onChange}>{filters}</select>
            </div>
        )
    }

    const DateRangeFilter = ({value: dateRange, onChange }) => {
        const dateRanges = Object.keys(QuickDateRangeFilters).map((key) => {
            const dateRangeLabel = QuickDateRangeFilters[key]
            const handleClick = () => onChange(key)
            const className = key === dateRange ? 'selected' : ''
            return (<button className={className} onClick={handleClick} value={key}>{dateRangeLabel}</button>)
        })
        return (
            <div className='filter'>
                {dateRanges}
                </div>
        )
    }
    
    return <div>
            <OrgFilter value={organization} onChange={onOrgChange}/>
            <input className='system-filter-textbox'
                key='systemFilterValue'
                placeholder='filter by a system?'
                value={sys} 
                onChange={handleSysChange}
                onKeyDown={onSysChange}/>
            <DateRangeFilter value={dateRange} onChange={onDatesChange}/>
        </div>
}

export default Filter