import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    
      <Link to={`/products/${product.id}`}>

        <div className='border border-black rounded-lg w-48 h-64 flex flex-col items-center p-2 '>
          
          <div className="w-fit h-48 ">
            <img src={product.images[0]} alt={product.title} className="w-full h-full object-fit" />
          </div>

          <div className='text-center'> Brand : {product.brand}</div>

          <div className=" flex flex-row gap-4 ">
            <div> {product.title} </div>
            <div> {product.price}</div>
            <div> {product.discountPercentage}%</div>
          </div>
        </div>
      </Link>
  
  )
}

export default ProductCard
