import React from 'react'
import GlobalContext from '../Context/Globalcontext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
function ProductDetails({ product }) {

   let{cartDispatch , carts} =useContext(GlobalContext)

   function addToCart(){
       alert('add to cart is clicked')

       cartDispatch({
        type: "ADD_TO_CART",
        payload : product
       })
   }
   function RemoveFromCart(){
    alert('Remove From Cart is clicked')

    cartDispatch({
     type: "REMOVE_FROM_CART",
     payload : product.id
    })
}
    return (

        <div>

            <div className=' h-1/4 p-4 grid grid-cols-2 gap-2'>

                <div className='border border-gray-400 mb-4 rounded-lg h-full flex items-center justify-center'>
                    <img src={product.thumbnail} alt={product.title} className='w-full h-full object-contain' />
                </div>

                <div className="border border-gray-400 rounded-lg h-full flex flex-col gap-2 pl-4">

                    <div><strong>{product.title}</strong></div>
                    <div>{product.description}</div>

                    <div className='flex flex-row items-center mb-4'>
                        <div>Rating: {product.rating} / 5</div>
                        <div className='text-xl px-2'>|</div>
                        <div>Brand : {product.brand}</div>
                        <div className='text-xl px-2'>|</div>
                        <div>Category : {product.category}</div>
                    </div>

                    <div><strong>${product.price} </strong>Inclusive of all prices</div>
                    <div>Discount: {product.discountPercentage}%</div>
                    <button onClick={addToCart} className='border border-black'>Add to Cart</button>
                    <button onClick={RemoveFromCart} className='border border-black'>Remove From Cart</button>
                    
                    <Link to={'/cart'}>Go to Cart</Link>

                </div>
            </div>

            <div className='mt-[-5%] ml-4 w-96'>
                <h2 className='ml-4 font-bold '>Reviews:</h2>
                {product.reviews ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className='border border-gray-400 rounded-lg p-4 mb-4 mt-4'>
                            <div><strong>Rating:</strong> {review.rating} / 5</div>
                            {/* {new Array(product.reviews[1].rating).fill(0).map(ele => <h1>⭐</h1>)} */}
                            <div className='flex'>
                                {new Array(review.rating).fill(0).map(ele => <p>⭐</p>)}
                            </div>
                            <div><strong>Comment:</strong> {review.comment}</div>
                            <div><strong>Reviewer:</strong> {review.reviewerName}</div>
                        </div>
                    ))
                ) : (
                    <div>No reviews available</div>
                )}
            </div>

            <hr/>
            {carts && carts.map(ele => <h1>{ele.title}</h1>)}

        </div>
    )
}

export default ProductDetails
