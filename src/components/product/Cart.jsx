import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(ProductContext);
    const navigate = useNavigate();

    // حساب إجمالي السعر
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    // إشعار عند حذف المنتج
    const handleRemoveProduct = (productId, title) => {
        removeFromCart(productId);
        toast.error(`❌ ${title} removed from cart!`, { autoClose: 2000, theme: "colored" });
    };

    // إشعار عند تغيير الكمية
    const handleQuantityChange = (product, action) => {
        if (action === "increase") {
            increaseQuantity(product.id);
            toast.success(`🔼 ${product.title} quantity increased!`, { autoClose: 1500, theme: "colored" });
        } else if (action === "decrease") {
            if (product.quantity > 1) {
                decreaseQuantity(product.id);
                toast.info(`🔽 ${product.title} quantity decreased.`, { autoClose: 1500, theme: "colored" });
            } else {
                handleRemoveProduct(product.id, product.title);
            }
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center my-6">🛒 Shopping Cart</h1>

            {cart.length === 0 ? (
                <div className="text-center text-gray-500 text-lg">
                    <p>Your cart is empty.</p>
                    <Link to="/">
                        <button className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6">
                    {/* إجمالي السعر */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center border">
                        <h2 className="text-2xl font-bold">
                            Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                        </h2>
                        <Link to="/CheckoutPage" state={{ from: "/Cart" }}>
                            <button className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold text-lg">
                                <FaShoppingCart /> Proceed to Checkout
                            </button>
                        </Link>
                    </div>

                    {/* المنتجات */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cart.map((product) => (
                            <div key={product.id} className="flex items-center bg-white shadow-md rounded-lg p-4 border">
                                {/* صورة المنتج */}
                                <img src={product.image} alt={product.title} className="w-24 h-24 object-contain mr-4 rounded-lg" />

                                {/* معلومات المنتج */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                                    <p className="text-green-600 text-sm">✅ In Stock</p>
                                    <p className="font-bold text-lg">${product.price.toFixed(2)}</p>

                                    {/* التحكم في الكمية */}
                                    <div className="mt-3 flex items-center gap-3">
                                        <button
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition flex items-center justify-center"
                                            onClick={() => handleQuantityChange(product, "decrease")}
                                        >
                                            <FaMinus />
                                        </button>
                                        <span className="text-lg font-bold">{product.quantity}</span>
                                        <button
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition flex items-center justify-center"
                                            onClick={() => handleQuantityChange(product, "increase")}
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>

                                    {/* زر الحذف */}
                                    <button
                                        className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center gap-2"
                                        onClick={() => handleRemoveProduct(product.id, product.title)}
                                    >
                                        <FaTrash /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* إشعارات التوست */}  
            <ToastContainer />
        </div>
    );
};

export default Cart;
