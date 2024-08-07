import { useState } from "react";

const NameList = () => {
    const [inputValue, setInputValue] = useState('');
    const [names, setNames] = useState([]);

    const handleAddName = () => {
      if (inputValue.trim() !== '') {
        setNames([...names, inputValue]);
        setInputValue('');
      }      
    }    

  return (
    <div>
      <div>     
        <input 
          type="text"
          placeholder="Ingrese nuevo nombre"
          value={inputValue}        
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddName}>+ Agregar</button>
      </div>

      <h2>Lista de Nombres</h2>
      <ul>
        {
          names.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default NameList;