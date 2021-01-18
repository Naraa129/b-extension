import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { organizationsMap } from '../ActivityView/activityReducer'
import { orgChanged, sysChanged } from '../Filter/filterReducer'

const Filter = () => {
    const [sys, setSys] = useState('')
    const dispatch = useDispatch()
    const { organization } = useSelector((state) => state.filters)

    const orgsMap = useSelector(organizationsMap)

    const onOrgChange = (evt) => dispatch(orgChanged(evt.target.value))
    const onSysChange = (evt) => {
        if(evt.which == 13 && sys)
            dispatch(sysChanged(sys))
    }
    
    const handleSysChange = (evt) => setSys(evt.target.value)

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
    
    return <div>
            <OrgFilter value={organization} onChange={onOrgChange}/>
            <input
                key='systemFilterValue'
                placeholder='filter by a system?'
                value={sys} 
                onChange={handleSysChange}
                onKeyDown={onSysChange}/>
        </div>
}

export default Filter