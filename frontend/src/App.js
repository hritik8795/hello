import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/register" element={<Signup/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
