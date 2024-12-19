import React from 'react'
import GlobalContext from './Globalcontext'
import { useReducer } from 'react'

function GlobalContextProvider({children}) {

    let initialcart = {
        carts: [],
        cartCount: 0
    }
    
    function cartReducer(state ,action){
        switch (action.type) {
            case 'ADD_TO_CART':
                    const itemExists = state.carts.find((item)=> item.id ==action.payload.id)
                    if(itemExists){
                        return {
                            ...state, 
                            carts: state.carts.map((item) =>item.id ==action.payload.id?
                                    {...item ,quantity: item.quantity + 1} : item),
                            cartCount:state.cartCount+1
                        }
                    }
                    return {carts :[...state.carts,{...action.payload, quantity: 1}] , cartCount:state.cartCount+1};
            case 'REMOVE_FROM_CART':
                const tempCart = state.carts.filter(item => item.id != action.payload)
                return {carts : tempCart ,cartCount: state.cartCount-1};
        
            default:
                return state;
        }
    }
   
    let[state ,dispatch] = useReducer(cartReducer ,initialcart)

    let item ={
        id :'1',
        name : 'playstation 5'
    }


  return (
    <div>
         
      <GlobalContext.Provider value ={
        {cartDispatch : dispatch,
         carts : state.carts,
         cartCount :state.cartCount
        }}>
        {children}
      </GlobalContext.Provider>
    </div>
  )
}

export default GlobalContextProvider
