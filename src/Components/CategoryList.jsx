import React from 'react'
import { Link } from 'react-router-dom'

function CategoryList({category}) {


  return (
    <div className='flex justify-center items-center border border-black p-2'>
      <button > 
        <Link to={`/category/${category}`}>{category} </Link>
      </button>
    </div>
  )
}

export default CategoryList
