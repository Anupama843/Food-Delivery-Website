import React from 'react'
import './ExploreCard.css'
import { Link } from 'react-router-dom';

function ExploreCard({ restaurant, handelClick }) {
    const name = restaurant.name ?? "";
    const imageUrl =restaurant?.image_url;
    return (
        <Link to={"mainmenu"}>
            <div className='explore-card cur-po explore-card-first' onClick={() => handelClick(restaurant)}>
            <div className="explore-card-cover">
                <img src={imageUrl} className="explore-card-image" alt="" />
            </div>
            <div className="res-row">
                <div className="res-name">{name}</div>
                <div className="res-rating absolute-center">
                    {restaurant.rating}
                </div>
            </div>
            <div className="res-categories">
                {<strong>Cuisines:</strong>}
            {restaurant.categories.map((category, i)=>{
                if (i>1) {
                    return null;
                } else {
                    return <span key={i}>{category.title}</span>
                }
            })}
            </div>
        </div>
        </Link>
    )
}

export default ExploreCard
