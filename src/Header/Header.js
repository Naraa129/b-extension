import React, { useState } from 'react'
import Filter from '../Filter/Filter'

const Header = () => {
    
    const [status, setStatus] = useState('')

    let isLoading = status === 'loading'
    let loading = isLoading ? <div>Loading ...</div> : null
    return (
        <header className='header'>
            Retainai Individual View
            {loading}
            <div>
                <div className='filter-title'>Filters</div>
                <Filter/>
                </div>
            </header>
    )
}

export default Header