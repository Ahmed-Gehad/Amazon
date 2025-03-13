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
    <div className='container mx-auto p-4'>
      <div className='flex justify-between gap-10'>
        <div>
          <img src={selectedProduct.image} alt={selectedProduct.title}
         className='me-10 mt-10'
            style={{ width: '500px', height: '400px', textAlign: 'center' }} />
        </div>
        <div>
          <h1 className='text-4xl my-10 text-orange-500 font-bold'>{selectedProduct.title}</h1>
          <p className='my-5 font-medium'>{selectedProduct.description}</p>
          <p className='my-5 text-2xl font-bold text-orange-500'>Price: {selectedProduct.price} $</p>
          <p className='my-5 text-2xl  '> category : {selectedProduct.category}</p>


          <button onClick={handleAddToCart}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 w-80'>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetaills