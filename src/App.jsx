import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./components/product/ProductContext";
import ProductDetaills from "./components/product/ProductDetaills";
import ProductList from "./components/product/ProductList";
import Cart from "./components/product/Cart";
import Navbar from "./components/navbar/Navbar";
import LoginPage from "./components/Account/LoginPage";
import RegisterPage from "./components/Account/RegisterPage";
import CheckoutPage from "./components/product/CheckoutPage";
import AuthDetails from "./components/Account/AuthDetails";
import PrivateRoute from "./components/Account/PrivateRoute";

const App = () => {
  return (
    <ProductProvider> {/* 🔥 الآن كل المكونات بما فيها Navbar يمكنها الوصول لـ ProductContext */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetaills />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />



          <Route
            path="/CheckoutPage"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />

        

          <Route path="/AuthDetails" element={<AuthDetails />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;