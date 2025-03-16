import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

const CheckoutPage = () => {
  const { cart } = useContext(ProductContext);

  //  حساب إجمالي السعر
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  //  بيانات المستخدم
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "credit-card",
  });

  //  تحديث بيانات النموذج
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  عند تأكيد الطلب
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Order placed successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-6">🛍️ Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 🛒 ملخص السلة */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">🛒 Order Summary</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((product) => (
                <div key={product.id} className="flex items-center justify-between border-b pb-3">
                  <img src={product.image} alt={product.title} className="w-16 h-16 object-contain" />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-500">Qty: {product.quantity}</p>
                  </div>
                  <p className="text-lg font-bold">${(product.price * product.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="text-xl font-bold mt-4 text-right">
                Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>

        {/* 📋 نموذج بيانات الشحن */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">📦 Shipping Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />

            {/*  اختيار طريقة الدفع */}
            <div>
              <label className="block text-lg font-semibold">💳 Payment Method:</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>

            {/*  زر تأكيد الطلب */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition"
            >
              ✅ Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;