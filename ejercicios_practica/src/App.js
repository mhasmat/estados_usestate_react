import './App.css';
import NoteApp from './components/NoteApp';
import Counter from './components/Counter';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NameList />
        <Counter />
        <NoteApp />
      </header>
    </div>
  );
}

export default App;
