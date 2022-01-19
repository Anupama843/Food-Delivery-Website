
import Nightlife from "./Nightlife";
import Delivery from "./Delivery";
import Dining from "./Dining";
import { useEffect, useState } from "react";
import Nav from "../../Nav/Nav";
import Filters from "../../Filter/Filters";
import Slider from "../../Carousel/Slider";
function Product() {

    const [activeTab, setActiveTab] = useState("Delivery");
    const [restaurants, setRestaurants] = useState([])
    const [filters, setFilters] = useState([])
    
    function getRestaurantData() {
        fetch('data/restaurants.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (restaurants) {
                console.log(restaurants);
                setRestaurants(restaurants)
            });
    }

    useEffect(() => {
        getRestaurantData()
        setFilters(diningFilter)
    }, [])

    const getCorrectScreen = (tab) => {
        console.log('selected tap = ' + tab);
        switch (tab) {
            case "Delivery":
                return <Delivery title={Delivery} restaurants={getDeliveryRestaurants()}/>;
            case "Dining Out":
                return <Dining title={Dining} restaurants={getDiningRestaurant()}/>;
            case "Nightlife":
                return <Nightlife title={Dining} restaurants={restaurants}/>;
            default:
                return <Delivery title={Delivery} restaurants={getDeliveryRestaurants()}/>;
        }
    };

    function getDeliveryRestaurants() {
        const deliveryRestaurants = restaurants.filter((restaurant) => { 
           return restaurant.transactions.includes('delivery') || restaurant.transactions.includes('pickup') || restaurant.transactions.length === 0
        });
        return deliveryRestaurants
    }

    function getDiningRestaurant() {
        const diningRestaurants = restaurants.filter((restaurant) => { 
            return restaurant.transactions.includes('restaurant_reservation') || restaurant.transactions.length === 0
         });
         return diningRestaurants
    }

    const diningFilter = [
        {
            id: 1,
            icon: <i className="fas fa-filter"></i>,
            title: "Filters",
            isSelected: false,
        },
        {
            id: 2,
            title: "Rating: 4.0+",
            isSelected: false,
        },
        {
            id: 3,
            title: "Pure Veg",
            isSelected: false,
        },
        {
            id: 4,
            icon: <i class="fas fa-clock"></i>,
            title: "Delivery Time",
            isSelected: false,
        },
        {
            id: 5,
            title: "Daily Offers",
            isSelected: false,
        },
        {
            id: 6,
            title: "Our Best",
            isSelected: false,
        }
    ]

    return (
        <div>
            {console.log("recreate product")}
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
            <Filters filterList={filters} handleFilterSelection={handleFilterSelection}/>
            <Slider />
            {getCorrectScreen(activeTab)}
        </div>
    );

    function handleFilterSelection(filterOption) {
        let selected = filters.find((option) => { return (option.id === filterOption.id) });
        selected.isSelected = true;
        setFilters(filters)
        console.log("selected = " + filterOption.id)
    }
}


export default Product;
