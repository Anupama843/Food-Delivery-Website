import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Autocomplete from '../../Component/AutoComplete/AutoComplete';
import Dropdown from '../../Component/Dropdown/Dropdown';
import Delivery from './Product/Delivery';
import Dining from './Product/Dining';

function Home() {

    const [cities, setCities] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)

    const getCityData = () => {
        fetch('data/cities.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (cities) {
                setCities(cities)
            });
    }
    useEffect(() => {
        getCityData()
        getRestaurantData()
    }, [])

    function getRestaurantData() {
        fetch('data/restaurants.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (restaurants) {
                restaurants.sort((r1, r2) => (r1.rating > r2.rating));
                setRestaurants(restaurants)
            });
    }

    function handleSelection(city) {
        setSelectedCity(city)
    }

    function didSelectedSuggestions(suggestions) {

    }

    return (
        <div>
                <div className='body'>
                    <div className='center'>
                        {/* <h2><FaIcons.FaLastfm />House</h2> */}
                        {/* <h3 className="heading">Make Your Life easy, order what you like</h3> */}
                        <div className='center_location_search_container'>
                            <div className='location_wrapper'>
                                <Dropdown
                                    title={(selectedCity != null) ? selectedCity.city : 'Seattle'}
                                    list={cities}
                                    handleSelection={handleSelection}
                                />
                            </div>
                            <div className="location_search_separator"></div>
                            <div className="center_searchBar">
                                <div className='absolute_center'><i className="fas fa-search"></i></div>
                                <Autocomplete suggestions={restaurants} didSelectedSuggestions={didSelectedSuggestions}/>
                            </div>
                        </div>
                    </div>
                <Dining title={"Top 3 Places for Dining"} restaurants={getTop5DiningRestaurants()}/>
                <Delivery title={"Top 3 Places for Take Out"} restaurants={getTop5TakeOutRestaurants()}/>
                </div>
        </div>
    );

    function getTop5DiningRestaurants() {
        const deliveryRestaurants = restaurants.filter((restaurant) => { 
            return restaurant.transactions.includes('delivery') || restaurant.transactions.includes('pickup')
         });
        return deliveryRestaurants.slice(1, 4);
    }

    function getTop5TakeOutRestaurants() {
        return restaurants.slice(1, 4);
    }
}

export default Home
