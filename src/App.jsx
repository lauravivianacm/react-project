import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-bootstrap-submenu/dist/index.css'
import NavBar from './components/layout/NavBar'
import HomeCarousel from './components/content/HomeCarousel'
import ItemListContainer from './components/content/ItemListContainer'
import ItemDetailContainer from './components/content/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <HomeCarousel/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
          <Route path='*' element={<h6>404</h6>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
