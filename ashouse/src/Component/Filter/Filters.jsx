import './Filters.css'
import FilterItem from './FilterItem';
import React from 'react'

function Filters({ filterList, handleFilterSelection }) {
    return (
        <div className="filters">
            {filterList &&
                filterList.map((filter) => {
                    return <FilterItem filter={filter} handleFilterSelection={handleFilterSelection} key={filter.id} />;
                })}
        </div>
    );
}

export default Filters;
