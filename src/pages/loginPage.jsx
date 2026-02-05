import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [email, setEmail] =useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate()

    async function login(){

        try{
            const res= await axios.post(import.meta.env.VITE_BACKEND_URL +"/users/login",{
            email:email,
            password:password
        });
            console.log(res)

            if(res.data.role == "admin"){
                navigate("/admin");
            }else{
                navigate("/");
            }

            toast.success("logn sucessfull")
        }catch(err){
            console.log(err)
            toast.error("logn Unsucessfull")
        }

    }




    return(
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover flex bg-no-repeat    ">
            <div className=" w-[50%] h-full flex items-center justify-center text-[50px] text-accent text-shadow-secondary text-shadow-2xs font-bold m-[20px] text-center">
                <h1>Built for Speed. Built for You.</h1>
            </div>


            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[450px] h-[600px] backdrop-blur-lg rounded-3xl shadow-2xl flex items-center justify-center flex-col p-[20px]">
                    <h1 className="text-[40px] mb-[30px]">Login</h1>

                    <input 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    type="email" 
                    placeholder="enter Email" 
                    className=" w-full h-[50px] m-[20px] border rounded-2xl p-[10px] focus:outline-none focus:ring-2 focus:ring-accent" />
                    
                    <input 
                    onChange={(e)=>
                        setPassword(e.target.value)
                    }
                    type="Password" 
                    placeholder="enter Password" 
                    className=" w-full h-[50px] m-[10px] border rounded-2xl p-[10px] focus:outline-none focus:ring-2 focus:ring-accent" />


                    
                    <button onClick={login}
                    className=" w-full h-[50px] bg-orange-300 rounded-2xl mt-[10px] hover:bg-accent shadow-2xl"> Sign In</button>
                    
                    <p className="text-[12px] mt-[5px]">Don't have an account?  <Link to = "/register" className="text-blue-700 ita"> sign up</Link></p>
                </div>
            </div>


        </div>
    )
}