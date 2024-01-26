import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home.js'
import List from './List.js';
import Hotel from './Hotel.js';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotels/:id" element={<Hotel/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
