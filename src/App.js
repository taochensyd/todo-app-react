import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import {DataProvider} from './context/DataContext';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <Todo />
      </DataProvider>
    </div>
  );
}

export default App;
