import React, { useContext } from "react";
import { counterContext } from "./Context/store";

function About() {
    let {count , setCount} = useContext(counterContext)
  return (
    <>
      <div className="col-span-2 border border-green-900 py-5 my-5">
        <span>increment</span>
        <span className="mx-4 text-2xl cursor-pointer" onClick={()=>setCount(count +1)}>+</span>
      </div>
    </>
  );
}

export default About;
