import React, { useState, useEffect, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // 🔍 حالة البحث

  //  تحميل السلة من LocalStorage عند بدء التشغيل
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  //  حفظ السلة في LocalStorage عند تحديثها
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //  جلب المنتجات من API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  //  تصفية المنتجات بناءً على مصطلح البحث
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //  إضافة منتج إلى السلة (مع تتبع الكمية)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  //  زيادة الكمية
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //  تقليل الكمية (وحذف المنتج إذا وصلت إلى 0)
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //  حذف المنتج بالكامل من السلة
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        selectedProduct,
        setSelectedProduct,
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        searchQuery, 
        setSearchQuery, 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
