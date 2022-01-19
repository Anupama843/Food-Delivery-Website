

import React from "react";
import "./FilterItem.css";

function FilterItem({ filter, handleFilterSelection }) {
  return (
    <button className={filter.isSelected ? "filter-item selected" : "filter-item"}
      onClick={() => { handleFilterSelection(filter) }}>
      {filter.icon && filter.icon}
      {console.log("selected = " + filter.isSelected)}
      <span className="filter-name">{filter.title}</span>
    </button>
  );
};

export default FilterItem;