import { use, useCallback, useState } from "react";

export default function Test(props){


    const[count , setcount] = useState(0)
    const[status, setStatus]=useState('🌞')

  return (
   <div className="h-screen w-full border bg-gray-300 flex flex-col items-center justify-center" >
    <div className="h-[300px] w-[500px] shadow-2xl flex justify-center items-center" >
      <button className="h-[50px] w-[150px] bg-red-600 text-center text-[30px]  " 
      onClick={()=>{
        setcount(count-1)
      }}>
        -
      </button>
      <h1 className="h-[50px] w-[150px] text-center text-[30px]" >
        {count}
      </h1>
      <button className="h-[50px] w-[150px] bg-green-600 text-center text-[30px]"
       onClick={()=>{
        setcount(count+1)
      }}>
        +
      </button>

    </div>

    <div className="h-[300px] w-[500px] shadow-2xl flex justify-center items-center">

      <button className="w-[150px] h-[50px] bg-gray-700 text-3xl" 
      onClick={()=>{
        setStatus("🌚")
      }}>
        🌚
      </button>

      <h1 className="w-[150px] h-[50px] text-3xl text-center">
        {status}
      </h1>
      
      <button className="w-[150px] h-[50px] bg-yellow-500 text-3xl"
      onClick={()=>{
        setStatus("🌞")
      }}>
        🌞
      </button>
    </div>

   </div>
  )
}