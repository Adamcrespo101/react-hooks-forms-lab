import React, { useState } from "react";
import items from "../data/items";

function Filter({ onCategoryChange, search, setSearch }) {

  
  
  function onSearchChange(event){
   setSearch(event.target.value)
   
  }
  


  


  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
