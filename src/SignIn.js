import React, { useState } from 'react'

function SignIn() {
  const[shirts,setShirts]=useState([
    {id:1,name:'shirt1'},
    {id:1,name:'shirt1'},
    {id:1,name:'shirt1'},
    {id:1,name:'shirt1'},
  ])





  return (
    <div>
     {shirts.map(
      (p)=>
      <div className='prodbox' key={p.id}>
        {p.name}
      </div>
      
      )}



    </div>
  )
}

export default SignIn