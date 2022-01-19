import React from "react";
import ExploreRestaurant from "../../Explore/ExploreRestaurant";

function Dining({title, restaurants}){
    return(
        <div className="max-width" key={title}>
                <ExploreRestaurant list = {restaurants} collectionName={title}/>
        </div>
    )
}
export default Dining;