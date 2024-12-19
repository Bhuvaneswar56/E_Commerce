import React from 'react'
import { useState,useEffect } from 'react'
import E_COMMERCE_INSTANCE from '../Services/api'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'


function Searchpage() {

    let {searchItem}=useParams()

    let [searchProducts ,setSearchProducts]=useState(null)

    async function getSearchProducts(){
        try{
             let res2= await E_COMMERCE_INSTANCE.get(`/products/search?q=${searchItem}`)
             setSearchProducts(res2.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }
    useEffect(()=>{
        getSearchProducts()
    },[])
  return (
    <div>
      <div className=' border border-black flex flex-row flex-wrap'>
      {searchProducts?.products?.length ? searchProducts.products.map((product)=><ProductCard product={product}/>) : 'No Products ...'}
    </div>
    </div>
  )
}

export default Searchpage
