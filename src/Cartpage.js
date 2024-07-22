import React from 'react'
import { StoreState } from './StoreContext'

function Cartpage() {
  const{cart,setCart}=StoreState();

  return (
    <div className='crtpg'>
      {cart.length>0 
      ? <div>{cart.map((a)=>
          <div key={a.id} className='crtprodbox'><img src={a.image} className='crtprodimg'></img>
          <div className='crtprodname'>{a.name}</div>
          <div className='crtprodprice'>{a.price}</div>
          </div>
        )}</div>
      :
      <p>empty</p>
      }
        
    </div>
  )
};

export default Cartpage;