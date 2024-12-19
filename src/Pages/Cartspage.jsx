import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../Context/Globalcontext'


function cartsspage() {
    let { carts } = useContext(GlobalContext)
    return (
        <div>
            <h1> All carts items</h1>
            {carts.length > 0 ? (
                carts.map((ele) => (
                    <div key={ele.id} className="border p-4 mb-4 rounded-lg flex flex-row justify-around">
                        <div><img src={ele.images[0]} alt={ele.title} className="w-32 h-32 object-cover" /></div>
                        <div>
                            <h3>{ele.title}</h3>
                            <p>Price: ${ele.price}</p>
                            <p>Qty: {ele.quantity}</p>
                        </div>

                    </div>
                ))
            ) : (
                <p>Your carts is empty.</p>
            )}




        </div>
    )
}

export default cartsspage
