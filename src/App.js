import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PlantDetailContainer from './components/PlantDetailContainer/index';
import Contact from './components/Contact/index';
import CartDetail from './components/CartDetail/index';
import Profile from './components/Profile/index';
import CartProvider from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/plant/:id' element={<PlantDetailContainer />} />
        <Route path='/cart' element={<CartDetail />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
