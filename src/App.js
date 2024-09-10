import React,{useState} from "react";
function App() {
const [count,setCount]=useState(0)

/*
  const increment=()=>{
    setCount(count+1)

  }
    */

  const decrement=()=>{
    setCount(count-1)
  }
  const reset =()=>{
    setCount(0)
  }

  return (
    <div className="flex flex-col justify-center items-center h-[500px]">
      <h1 className="text-3xl font-bold text-8xl bg-green-200">{count}</h1>
     <div className="flex items-center gap-2 ">
     <button onClick={()=>{count===0 ?setCount(count):setCount(count-1)}} className="font-bold border border-black text-red-600 bg-slate-400 text-4xl px-1  bg-slate-400">-</button>

     <button onClick={reset} className="font-bold border border-black text-4xl bg-slate-400">reset</button>

     <button onClick={()=>{count===10 ?setCount(count):setCount(count+1)}} className="font-bold border border-black text-green-600 bg-slate-400 text-4xl  bg-slate-400">+</button>
    
         
     
     </div>
    </div>
  );
}

export default App;
