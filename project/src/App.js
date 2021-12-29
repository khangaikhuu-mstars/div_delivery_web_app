
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./compStyle/TextField.css"
import Login from './login';
import Register from './Register';
import Dropdown from './dropdown';
import Slider from  "./component/Slider"
import Search from './search';

function App() {
  return (
    <div>
      <Slider />
      <header className="App-header1">
        <Register/>
      </header>
      <header className='App-header1'>

      <Login/>

      </header>

      <header className='App-header1'>
        <Dropdown/>
      </header>
      <header className='App-header1'>
        <Search/>
      </header>
    </div>
  )}


export default App;
