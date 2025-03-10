import React, { useContext, useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

// Import Images

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

const ProductList = () => {
    const { selectedProduct } = useContext(ProductContext);
    const { products, setSelectedProduct, addToCart } = useContext(ProductContext);
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
    }


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };



    return (
        <>

            <div className='relative'>
                {/* Slider */}
                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        {/* الشرائح */}
                        <SwiperSlide>
                            <img className="image-fade" src={home1} alt="User 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="image-fade" src={home2} alt="User 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="image-fade" src={home3} alt="User 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="image-fade" src={home4} alt="User 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="image-fade" src={home5} alt="User 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="image-fade" src={home6} alt="User 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="image-fade" src={home7} alt="User 2" />
                        </SwiperSlide>


                        {/* دايره العد*/}
                        <div className="autoplay-progress absolute bottom-5 right-5 flex items-center gap-2">
                            <svg className="w-8 h-8 text-orange-400" viewBox="0 0 48 48" ref={progressCircle}>
                                <circle
                                    className="text-gray-600"
                                    cx="24"
                                    cy="24"
                                    r="20"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray="125.6"
                                    strokeDashoffset="125.6"
                                    style={{ stroke: "var(--progress)" }}
                                />
                            </svg>
                            <span ref={progressContent} className="text-orange-400 font-bold"></span>
                        </div>
                    </Swiper>
                </div>


            </div>
            <div className='absolute top-80 left-0 w-full h-full  z-10'>
                {/* <h1 className='text-3xl font-bold mb-4 text-center'>
                    Product list
                </h1> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 '>
                    {products.map((product) => (
                        <div key={product.id} className=' p-4 rounded-lg shadow-md'>
                            <Link to={`/products/${product.id}`} onClick={() => handleProductClick(product)}>
                                {product.image &&
                                    <img src={product.image}
                                        alt={product.title}
                                        className='rounded-2xl '
                                        style={{ width: '300px', height: '300px', textAlign: 'center', margin: '0 auto' }}
                                    />}
                                <div className='text-center font-bold text-xl'> {product.title}</div>

                                <div className='flex justify-between  items-center mt-2 mx-32'>
                                    <div className='font-bold'>
                                        {product.price}$
                                    </div>

                                    <div className='font-bold flex items-center gap-1'>
                                        {product.rating && product.rating.rate}
                                        <CiStar />
                                    </div>
                                </div>

                                <button className='bg-green-500 ms-20 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5'>
                                    More Details
                                </button>
                            </Link>

                            <button onClick={() => handleAddToCart(product)}
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5'>
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductList