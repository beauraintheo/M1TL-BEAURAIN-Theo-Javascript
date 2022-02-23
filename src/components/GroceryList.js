import React, { useState } from "react";
import '../styles/GroceryList.css';
import Item from "./GroceryItem";

function App() {
  const [ newValue, setNewValue ] = useState();
  const [ items, setItems ] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const newListItems = newValue !== "" ? [ ...items, newValue ] : items;
    
    if (newListItems === items)
      alert("Attention ! La valeur que vous cherchez à insérer est vide !")

    setItems(newListItems);
    setNewValue("");
  }

  return (
    <div className="container">
      <h1>Liste de courses</h1>

      {
        items && items.length !== 0
        ? items.map((item, index) => <Item item={item} index={index} />)
        : <div>
            <p>Vous n'avez aucun item dans votre liste de courses.</p>
            <p>Pour cela, vous pouvez en ajouter en saisissant le nom de votre item dans la zone ci-dessous.</p>
          </div>
      }

      <div className="add-item">
        <h2>Ajouter un nouvel item à la liste</h2>
        <textarea onChange={e => setNewValue(e.target.value)} value={newValue} cols={100} rows={10} placeholder="Ex: Salsifi ..." spellCheck={true} required></textarea>
        <button onClick={addItem}>Ajouter</button>
      </div>
    </div>
  );
}

export default App;
