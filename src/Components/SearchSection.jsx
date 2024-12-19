import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from '../Context/Globalcontext'
import { useContext } from 'react'

function SearchSection() {
  let { cartCount } = useContext(GlobalContext)

  let [searchTerm, setSearchTerm] = useState('')

  function onChangeHandler(e){
    setSearchTerm(e.target.value)

  }
  return (
    <div className='flex justify-center items-center'>


      <Link to={'/'}>Home</Link>
      <input className='border border-black' 
         type ='text'
         name ='product'
         value ={searchTerm}
         onChange={onChangeHandler}
         />
      <button> 
        <Link to={`/search/${searchTerm}`}>Search </Link>
        </button>

        <div className='max-w-48 absolute  top-3 right-4 flex gap-2 border border-black p-2'>
           <Link to={'/cart'}>Go to Carts</Link>
          <div className='relative'>
            <p className='absolute left-4 top-3 z-10 bg-pink-300 rounded-full px-1 text-xs'>{cartCount ? cartCount : 0}</p>
            <svg className="w-6 h-6 border  border-black text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
            </svg>
          </div>
        </div>

    </div>
    
  )
}

export default SearchSection
