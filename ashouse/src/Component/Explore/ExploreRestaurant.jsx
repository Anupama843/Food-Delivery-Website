import React from 'react'
import './ExploreRestaurant.css'
import ExploreCard from './ExploreCard'

function ExploreRestaurant({ list, collectionName }) {
    console.log('list = ' + list);
    return (
        <div className="max-width explore-section">
            <div className="collection-title">{collectionName}</div>
            <div className="explore-grid">
                {list.map((restaurant, index) => {
                    return <ExploreCard restaurant={restaurant} handelClick={handelClick} key={restaurant.id+index} />
                })}
            </div>
        </div>
    )

    function handelClick(restaurant) {
        console.log("handelClick restaurant = " + restaurant);
    }
}

export default ExploreRestaurant