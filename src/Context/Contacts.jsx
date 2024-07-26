import React, { useContext } from 'react'
import { counterContext } from './store'

function Contacts() {
    let {count , setCount} = useContext(counterContext)
  return (
    <>
          <div className="col-span-2 border border-blue-900 py-5 my-5">
        <span>decrement</span>
        <span className="mx-4 text-3xl cursor-pointer" onClick={count > 1 ? ()=>setCount(count -1) : ""}>-</span>
      </div>
    </>
  )
}

export default Contacts