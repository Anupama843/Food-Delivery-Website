
import Menu from './Menu';
import Categories from './Categories';
import './Categories.css';
import { useEffect, useState } from 'react';
import './Menu.css';

function MainMenu() {

    const [menuItems, setMenuItems] = useState([]);
    const [catagories, setCatagories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);


    useEffect(() => {
        getRestaurantData()
    }, [])

    function getRestaurantData() {
        fetch('data/restaurant-menu.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (categories) {
                console.log(categories)
                setCatagories(categories)
                const selected = categories[0];
                setSelectedCategory(selected.id)
                setMenuItems(selected['menu-items'])
            });
    }

    function handelSelection(category) {
        const selected = catagories.find((c) => { return c.id === category.id })
        setSelectedCategory(selected.id)
        setMenuItems(selected['menu-items'])
    }

    return <section className="menu__section">
        <div className="menu-title-container">
            <h1 className="menu-title">Our Menu</h1>
            <div className="underline"></div>
        </div>
        <Categories categories={catagories} selected={selectedCategory} handelSelection={handelSelection} />
        <div className="menu-container">
            {menuItems.map((menuItem) => {
                { console.log("menuItem = " + menuItem) }
                return <Menu item={menuItem} key={menuItem.id} />
            })}
        </div>
    </section>


}
export default MainMenu;