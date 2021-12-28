
import './App.css';
import Text from './Register';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./index.css"
import Login from './login';
import Register from './Register';
import Dropdown from './dropdown';

function App() {
  return (
    <div>
      <header className="App-header1">
        <Register/>
      </header>
      <header className='App-header1'>

      <Login/>

      </header>

      <header className='App-header1'>
        <Dropdown/>
      </header>
    </div>

 

  );
}


export default App;
