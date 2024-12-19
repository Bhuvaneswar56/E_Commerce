import React from 'react'
import E_COMMERCE_INSTANCE from '../Services/api'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { useState,useEffect } from 'react'

function Categorypage() {

    let {category} =useParams()

    let [categoryProducts ,setCategoryProducts]=useState(null)

    async function getCategoryProducts(){
          try{
              let res1 = await E_COMMERCE_INSTANCE.get(`products/category/${category}`)
              setCategoryProducts(res1.data);


          }
          catch(err){
             console.log(err)
          }
    }
    useEffect(()=>{
      getCategoryProducts();
    },[])
  return (
    <div className=' border border-black grid grid-cols-3 gap-3'>
      {categoryProducts?.products?.length ? categoryProducts.products.map((product)=><ProductCard product={product}/>) : 'No Products ...'}
    </div>
  )
}

export default Categorypage
