import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

const Cart = () => {
    const { cart } = useContext(ProductContext);

    return (

        <div>
            <h1 className='text-4xl'>Cart</h1>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.title}
                                style={{ width: '300px', height: '300px', textAlign: 'center', margin: '0 auto' }} />
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                            <p> category : {product.category}</p>
                          
                            {/* <button onClick={() => removeItem(product.id)}>Remove</button> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart