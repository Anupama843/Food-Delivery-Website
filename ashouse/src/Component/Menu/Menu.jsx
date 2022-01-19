
import './Menu.css';

function Menu({item}) {
    return (
        <div className='menu-item-container'>
            <div className='menu-item-image-wrapper'>
            <img src={item.image} alt= "" className='menu-item-image'></img>
            </div>
            <div className='menu-item-details'>
                <h3 className="menu-item-name"><strong>{item.name}</strong></h3>
                <h4 className="menu-item-price">{item.price}</h4>
                <p className="menu-item-desc">{item.description}</p>
                <div></div>
            </div>
        </div>
    );
}

export default Menu;