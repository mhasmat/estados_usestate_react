import { useState } from "react";

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddNote = () => {
        if(inputValue.trim() !== '') {
            setNotes([...notes, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };

  return (
    <>
        <div>
            <h1>Notas</h1>
            <input 
                type="text"
                placeholder="ingrese nueva nota"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}              
            />
            <button onClick={handleAddNote}>Agregar Nota</button>
            <ul>
                {
                    notes.map((nota, indice) => (
                        <li key={indice}>{nota}{" | "}       
                            <button onClick={(indice) => handleDeleteNote(indice)}>Eliminar</button>
                        </li>   
                    ))
                }
                <button 
                    onClick={() => setNotes([])}
                    >Borrar Todo
                </button>
            </ul>            
        </div> 
    </>
  )
}

export default NoteApp;