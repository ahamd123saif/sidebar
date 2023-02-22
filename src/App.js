import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar'

function App() {
  return (
    <>
     
     <Navbar/>
    <Routes>
     <Route path='navbar' element={<Navbar/>}/>
    </Routes>
    </>
    
  );
}

export default App;
