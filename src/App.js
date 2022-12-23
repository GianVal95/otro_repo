import './App.css'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Productos from './components/Productos';
import Home from './components/Home';
import Contacto from './components/Contacto';
import NavBarStore from './Layout/Navbar';

function App() {
  return (

    
    <div className="Apps">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<NavBarStore /> }>
          <Route index element={<Home />}/>
          <Route path='productos' element={<Productos/>}/>
          <Route path='contacto' element={<Contacto/>}/>


        </Route>

      </Routes>
      
      </BrowserRouter>
      
     
      
    
      
    </div>
  
  );
}

export default App;
