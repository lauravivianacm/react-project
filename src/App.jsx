import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-bootstrap-submenu/dist/index.css'
import NavBar from './components/layout/NavBar'
import HomeCarousel from './components/content/HomeCarousel'
import ItemListContainer from './components/content/ItemListContainer'
import ItemDetailContainer from './components/content/ItemDetailContainer'
import Cart from './components/content/Cart'
import CartContext from './context/CartContext'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBh5uouhgLR3Pvohs7ppcrPZMrlEkLaDgo",
  authDomain: "react-project-3be49.firebaseapp.com",
  projectId: "react-project-3be49",
  storageBucket: "react-project-3be49.appspot.com",
  messagingSenderId: "1032988156686",
  appId: "1:1032988156686:web:e0b4a7520b861f68dfed5f"
};

initializeApp(firebaseConfig);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={
              <>
                <HomeCarousel/>
                <ItemListContainer />
              </>
            }/>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='*' element={<h6>404</h6>}/>
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
  )
}

export default App
