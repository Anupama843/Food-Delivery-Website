import { useState } from "react";
import './Dropdown.css';

function Dropdown({ title, list, handleSelection }) {
    const [isListOpen, setIsListOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(title)

    function selectItem(item) {
        handleSelection(item)
        setSelectedValue(item.city)
        toggleList()
    }

    function toggleList() {
        setIsListOpen(!isListOpen);
    }

    if (list === null || list.length === 0) {
        return null;
    }
    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleList} >
                <span><i className="fas fa-location-arrow"></i> {' ' + selectedValue}</span>
                <div className="dropdown-header-icon">{isListOpen ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</div>
            </div>
            {isListOpen && (
                <ul className="dropdown-list" >
                    {list.map((item) => (
                        <li className="dropdown-list-item" key={item.id} onClick={() => selectItem(item)} >
                            {item.city}
                            {' '}
                            {(item.city === selectedValue) && <i className="fas fa-check"></i>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;