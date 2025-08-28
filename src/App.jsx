
import { Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home/Home.jsx'
import Product from './Pages/Home/Product.jsx'

function App() {

  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Product' element={<Product />} />
    </Routes>


  )
}

export default App
