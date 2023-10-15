import { useState } from "react";
import "./index.css"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];


const App = () =>{
  return(
    <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
    </div>
  )
}

const Logo = () =>{
  return(
    <h1>🌴 Far Away 🎒</h1>
  )
}

const Form = () =>{

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!description) return; // Bascially if no description is there we shouldn't be able to submit forms
    const newData = {description, quantity, packed : false , id: Date.now()}
    console.log(newData);

    //After the form is submitted going back to initial state
    setDescription("");
    setQuantity(1);
  }
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for the trip ? </h3>
      <select value={quantity} onChange={event => setQuantity(Number(event.target.value))}>
        {Array.from({length: 20},(_,i)=> i+1).map(
          (num) =>(
            <option value = {num} key={num}>
              {num}
            </option>
          )
        )}

      </select>
      {/* Controlled Inputs */}
      <input 
        type="text" 
        placeholder="item" 
        value={description} 
        onChange={event => setDescription(event.target.value)}/>
      <button>Add</button>
    </form>
  )
}

const PackingList = () =>{
  return (
    <div className="list">
      <ul>
      {initialItems.map((item)=>{
        return <Items itemObject = {item} key={item.id} />
      })}
    </ul>

    </div>
    
  )
}

const Items = ({itemObject})=>{
  return(
    <li>
      <span style={itemObject.packed? {textDecoration : "line-through"}: {}}>
      {`${itemObject.quantity} ${itemObject.description}`}
      </span>
      <button>❌</button>
      
    </li>
  )
}

const Stats = () =>{
  return (
    <footer>
      <em>You have x items in your list, and you already packed </em>
    </footer>
  )
}

export default App;