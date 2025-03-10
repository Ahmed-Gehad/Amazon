import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

const ProductDetaills = () => {

  const { selectedProduct, addToCart } = useContext(ProductContext);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
    }
  };

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className='text-center'>
      <h1 className='text-4xl my-5 '>{selectedProduct.title}</h1>
      <img src={selectedProduct.image} alt={selectedProduct.title}
        style={{ width: '300px', height: '300px', textAlign: 'center', margin: '0 auto' }} />
      <p className='my-5'>{selectedProduct.description}</p>
      <p className='my-5 text-2xl font-bold'>Price: {selectedProduct.price} $</p>
      <p> category : {selectedProduct.category}</p>
     

      <button onClick={handleAddToCart}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5'>
        Add To Cart
      </button>

    </div>
  )
}

export default ProductDetaills