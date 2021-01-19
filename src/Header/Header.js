import React, { useState } from 'react'
import Filter from '../Filter/Filter'

const Header = () => {
    
    return (
        <header className='header'>
            Retainai Individual View By Nara Bayarsaikhan
            <div>
                <div className='filter-title'>See what you are working on lately?</div>
                <Filter/>
                </div>
            </header>
    )
}

export default Header