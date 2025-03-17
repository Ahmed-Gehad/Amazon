import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; //  استيراد التوست
import "react-toastify/dist/ReactToastify.css"; //  استيراد ستايل التوست

const ProductDetails = () => {
  const { id } = useParams();
  const { products, selectedProduct, setSelectedProduct, addToCart } = useContext(ProductContext);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (!selectedProduct || selectedProduct.id !== parseInt(id)) {
      const product = products.find((p) => p.id === parseInt(id));
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [id, products, selectedProduct, setSelectedProduct]);

  if (!selectedProduct) {
    return <div className="text-center text-gray-600 text-xl mt-20">Loading product...</div>;
  }

  //  عند إضافة المنتج، نظهر رسالة التوست
  const handleAddToCart = () => {
    addToCart(selectedProduct);
    toast.success(`${selectedProduct.title} added to cart!`, {
      position: "top-right",
      autoClose: 2000, // إغلاق بعد 2 ثانية
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 bg-white p-10 shadow-lg rounded-xl">
        
        {/*  صورة المنتج مع تكبير عند النقر */}
        <div className="flex justify-center">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className='max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer'
            onClick={() => setIsFullScreen(true)}
          />
          
        </div>

        {/* تفاصيل المنتج */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">{selectedProduct.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-5">{selectedProduct.description}</p>
          <p className="text-2xl font-bold text-gray-900 mb-3">
            Price: <span className="text-orange-500">${selectedProduct.price}</span>
          </p>
          <p className="text-lg font-medium text-gray-600 mb-5">Category: {selectedProduct.category}</p>

          {/* زر إضافة المنتج إلى السلة */}
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full lg:w-72 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition flex items-center justify-center gap-2"
          >
            <FaShoppingCart /> Add To Cart
          </button>
        </div>
      </div>

      {/*  نافذة ملء الشاشة لعرض الصورة */}
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            {/* زر إغلاق الصورة */}
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition"
              onClick={() => setIsFullScreen(false)}
            >
              <FaTimes />
            </button>

            {/* الصورة المكبرة */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-[90vw] h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/*  عنصر التوست لإظهار الإشعارات */}
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;