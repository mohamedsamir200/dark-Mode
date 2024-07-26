import React, { useContext } from "react";
import { counterContext, darkModeContext } from "./Context/store";
import { ToggleSwitch } from "flowbite-react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


function Home() {
    let {count } = useContext (counterContext)
    let {switch1 , setSwitch1} = useContext (darkModeContext)
  return (
    <>
      <div className="border border-red-900 py-5 col-span-4 space-x-4 flex justify-around">
        <span >Nav Component</span>
        <span>{count}</span>
        <div className="flex space-x-3">
        <ToggleSwitch checked={switch1}  onChange={setSwitch1} />
        <span>{switch1 ?<MdLightMode className="text-2xl"/>: <MdOutlineLightMode className="text-2xl text-yellow-400"/>}</span>

        </div>

      </div>
    </>
  );
}

export default Home;
