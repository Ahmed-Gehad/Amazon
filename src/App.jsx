import React from 'react'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom'
import { ProductProvider } from './components/product/ProductContext'
import ProductDetaills from './components/product/ProductDetaills'
import ProductList from './components/product/ProductList'
import Cart from './components/product/Cart'
import Navbar from './components/navbar/Navbar'
import LoginPage from './components/Account/LoginPage'
import RegisterPage from './components/Account/RegisterPage'
import CheckoutPage from './components/product/CheckoutPage'
import AuthDetails from './components/Account/AuthDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <ProductProvider>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetaills />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
          <Route path='/CheckoutPage' element={<CheckoutPage />} />
          <Route path='/AuthDetails' element={<AuthDetails />} />


        </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App