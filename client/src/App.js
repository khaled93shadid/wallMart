import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Main from './components/main';

function App() {
  return (
    <Router>

        <Routes>
              <Route path="/Navbar"  element={<Navbar/>}/> 
              <Route path="/"  element={<Main />}/> 
        </Routes>


    </Router> 
  
  
  
  )
}

export default App;
