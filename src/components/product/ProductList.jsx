import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

// استيراد التوست لإشعارات التأكيد
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// استيراد الصور
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import home4 from "../../assets/home4.jpg";
import home5 from "../../assets/home5.jpg";
import home6 from "../../assets/home6.jpg";
import home7 from "../../assets/home7.jpg";

import { ProductContext } from './ProductContext';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const ProductList = () => {
    const { filteredProducts, setSelectedProduct, addToCart } = useContext(ProductContext);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.title} added to cart!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };

    return (
        <>
            {/*  السلايدر */}
            <div className="w-full max-w-screen-xl mx-auto">
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="rounded-xl overflow-hidden shadow-lg"
                >
                    {[home1, home2, home3, home4, home5, home6, home7].map((image, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center p-2">
                            <img
                                className=" object-contain transition-all duration-500 hover:scale-105"
                                style={{ width: "100%"  }}
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/*  قائمة المنتجات */}
            <div className='container mx-auto px-5 mt-10'>
                <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>🛍️ Our Products</h2>

                {filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">No products found.</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr'>
                        {filteredProducts.map((product) => (
                            <div key={product.id}
                                className='p-5 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 
                                min-h-[450px] flex flex-col border border-gray-200'>

                                {/*  صورة المنتج */}
                                <Link to={`/products/${product.id}`} onClick={() => handleProductClick(product)} className="flex-1">
                                    <div className="w-full h-60 flex items-center justify-center">
                                        <img src={product.image} alt={product.title}
                                            className='max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer'
                                        />
                                    </div>
                                    <h3 className='text-lg font-semibold mt-4 text-gray-700 text-center'>{product.title}</h3>

                                    {/*  السعر والتقييم */}
                                    <div className='flex justify-between items-center mt-2'>
                                        <span className='text-xl font-bold text-orange-500'>{product.price}$</span>
                                        <div className='flex items-center text-yellow-500 font-bold'>
                                            {product.rating && product.rating.rate} <CiStar />
                                        </div>
                                    </div>
                                </Link>

                                {/*  أزرار الإجراءات */}
                                <div className="mt-4 flex gap-2">
                                    <Link to={`/products/${product.id}`}
                                        className='flex-1 bg-green-500 hover:bg-green-600 text-white text-center font-semibold py-2 rounded-md transition flex items-center justify-center gap-2'>
                                        <FaInfoCircle /> More Details
                                    </Link>
                                    <button onClick={() => handleAddToCart(product)}
                                        className='flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition flex items-center justify-center gap-2'>
                                        <FaShoppingCart /> Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/*  إشعارات التوست */}
            <ToastContainer />
        </>
    )
}

export default ProductList;
