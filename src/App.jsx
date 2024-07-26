import About from "./About";
import "./App.css";
import Contacts from "./Context/Contacts";
import Home from "./Home";
import { counterContext, darkModeContext } from "./Context/store";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [switch1, setSwitch1] = useState(false);

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <darkModeContext.Provider value={{ switch1, setSwitch1 }}>
          <div className={`pt-10 h-screen ${switch1 && "bg-slate-900 , text-white"} duration-500`}>
            <div className="grid grid-cols-4 gap-5 w-[80%] text-center mx-auto">
              <Home />
              <About />
              <Contacts />
            </div>
          </div>
        </darkModeContext.Provider>
      </counterContext.Provider>
    </>
  );
}

export default App;
