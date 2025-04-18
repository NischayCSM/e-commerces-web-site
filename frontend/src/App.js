import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Groce from './pages/Groce';
import Tech from './pages/Tech';
import Cloth from './pages/Cloth';
import Offer from './pages/Offer';
import AddItemForm from './components/Additemform';
import { CartProvider } from './context/CardContext';
import CartPage from './pages/CartPage';
import CartNotification from './components/CartNotification';

export class App extends Component {
  render() {
    return (
      <div>
        
       <CartProvider>
        <Router>
          <CartNotification/>
          <Navbar/> 
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/Groce' element={<Groce/>} />
        <Route exact path='/Tech' element={<Tech/>} />
        <Route exact path='/Cloth' element={<Cloth/>} />
        <Route exact path='/Offer' element={<Offer/>} />
        <Route exact path='/CartPage' element={<CartPage/>} />
        {/* <Route path="/add-item" element={<AddItemForm/>} /> */}
        </Routes>
        </Router>
        </CartProvider>
      </div>
    )
  }
}

export default App
