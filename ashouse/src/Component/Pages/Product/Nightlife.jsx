
import React from "react";
import ExploreRestaurant from "../../Explore/ExploreRestaurant";


function Nightlife({title, restaurants}) {
    return (
        <div >
            <div className="max-width">
                <ExploreRestaurant list = {restaurants} collectionName={title}/>
            </div>

        </div>
    )

}
export default Nightlife;