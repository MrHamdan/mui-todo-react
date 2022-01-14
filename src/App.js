import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import DataTable from './Components/DataTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <DataTable/>
      </header>
    </div>
  );
}

export default App;
