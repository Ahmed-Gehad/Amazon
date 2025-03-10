import React, { useState, useEffect, createContext } from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);

            } catch (error) {
                console.log('eroor fetching products', error);
            }
        };
        fetchProducts();

    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    return (
        <ProductContext.Provider value={{ products, selectedProduct, setSelectedProduct, cart, addToCart }} >
            {children}
        </ProductContext.Provider>
    )
}