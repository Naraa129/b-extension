import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { organizationsMap } from './ActivityView/activityReducer'
import { orgChanged } from './Filter/filterReducer'

const Header = () => {
    const dispatch = useDispatch()
    const [status, setStatus] = useState('')
    const { organization, system, dateRange } = useSelector((state) => state.filters)

    const orgsMap = useSelector(organizationsMap)

    const OrgFilter = ({ value: organization, onChange }) => {
        const filters = Object.keys(orgsMap).map((key) => {
            const orgObject = orgsMap[key]
            return (
                <option value={orgObject.id}>{orgObject.name}</option>
            )
        })
        return (
            <div>
                <h5>Organization</h5>
                <select value={organization} onChange={onChange}>{filters}</select>
            </div>
        )
    }

    const onOrgChange = (evt) => dispatch(orgChanged(evt.target.value))

    let isLoading = status === 'loading'
    let loading = isLoading ? <div>Loading ...</div> : null
    return (
        <header className='header'>
            Retainai Individual View
            {loading}
            <div>
                <h5>Filters</h5>
                <OrgFilter value={organization} onChange={onOrgChange}/>
                </div>
            </header>
    )
}

export default Header