
import { Routes, Route } from 'react-router-dom'
import './App.css'

import ErrorBoundary from './Components/ErrorBoundary.jsx'
import Home from './Pages/Home/Home.jsx'
import Product from './Pages/Home/Product.jsx'
import Login from './Pages/Auth/Login.jsx'
import Register from './Pages/Auth/Register.jsx'

function App() {

  return (

    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ErrorBoundary>


  )
}

export default App
