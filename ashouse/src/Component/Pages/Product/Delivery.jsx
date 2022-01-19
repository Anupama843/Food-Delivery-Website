import React from "react";
import Filters from "../../Filter/Filters";
import ExploreRestaurant from "../../Explore/ExploreRestaurant";


function Delivery({ title, restaurants }) {
    return (
        <div >
            <div className="max-width">
                <Filters />
                <ExploreRestaurant list={restaurants}
                    collectionName={title} />
            </div>
        </div>
    )
}

export default Delivery;
