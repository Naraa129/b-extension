import React from 'react'
import ActivityView from './ActivityView/ActivityView';
import Filter from './Filter/Filter';

class IndividualView extends React.Component {
    
    render() {
        return (
            <div className="App">
                <Filter className='filter-container'/>
                <ActivityView className='table-container'/>
            </div>
            );
        }
}

export default IndividualView;

