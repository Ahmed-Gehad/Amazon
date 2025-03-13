import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

const Cart = () => {
    const { cart } = useContext(ProductContext);

    return (

        <div>
            <h1 className='text-4xl p-10 font-bold'>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product.id} className='flex justify-center gap-10 items-center '>
                            <div>
                                <img src={product.image} alt={product.title}
                                    style={{ width: '300px', height: '300px', textAlign: 'center', margin: '0 auto' }} />
                            </div>
                           <div>
                           <h3 className='text-2xl text-orange-500 font-bold py-10'>{product.title}</h3>
                           <p className='text-green-600 my-5'>in Stock</p>
                            <p className='font-bold pb-5'>{product.price}$</p>
                            <p> category : {product.category}</p>
                            <p className='mt-5'>Eligible for FREE delivery</p>

                           </div>

                            {/* <button onClick={() => removeItem(product.id)}>Remove</button> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart