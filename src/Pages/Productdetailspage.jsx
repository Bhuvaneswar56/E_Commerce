import React, { useEffect, useState ,useContext } from 'react'
import { useParams } from 'react-router-dom'
import E_COMMERCE_INSTANCE from '../Services/api'
import ProductDetails from '../Components/ProductDetails.jsx'
import GlobalContext from '../Context/Globalcontext.js'


function Productdetailspage() {

    let contextData =useContext(GlobalContext)
    

    let {productId}=useParams();

    let [product ,setProductDetails]=useState(null)
    async function getProductDetails(){
        try{
            let res=await E_COMMERCE_INSTANCE.get(`/product/${productId}`)
            setProductDetails(res.data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getProductDetails()
    },[])

  return (
    <div>
      {product? <ProductDetails product= {product}/>:"No Data..."}
    </div>
  )
}

export default Productdetailspage
