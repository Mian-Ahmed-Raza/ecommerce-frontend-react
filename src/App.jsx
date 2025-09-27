
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home/Home.jsx'
import Product from './Pages/Home/Product.jsx'
import Login from './Pages/Auth/Login.jsx'
import Register from './Pages/Auth/Register.jsx'

function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>


  )
}

export default App
