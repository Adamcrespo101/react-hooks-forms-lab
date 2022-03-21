import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({items, setItems}) {
  const [addNewItem, setAddNewItem] = useState('')
  const [newCategory, setNewCategory] = useState('category')

  function handleInput (event){
    setAddNewItem(event.target.value)
  }
  function handleCatInput(event){
  setNewCategory(event.target.value)
  }
  function createItem(event){
    const newItem = {
      id: uuid(),
      name: addNewItem,
      category: newCategory
    }
      
      
    event.preventDefault()
    return setItems([...items, newItem])
  }

  return (
    <form className="NewItem" value={addNewItem} onSubmit={createItem} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleInput} />
      </label>

      <label>
        Category:
        <select name="category" value={newCategory} onChange={handleCatInput}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={createItem}>Add to List</button>
    </form>
  );
}

export default ItemForm;
