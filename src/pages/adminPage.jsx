import { Link, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import { FaTruck } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

export default function AdminPage() {
    return(

        <div className="w-full h-screen bg-secondary flex ">
            {/* <Header className="fixed top-0 left-0"/> */}
            <div className="w-[300px] h-full bg-secondary ">

                <div className=" w-full h-[100px] bg-secondary flex items-center ">

                    <img src="/logo.png" className="h-full" alt="logo" />
                    <h1 className="text-3xl text-primary">Admin</h1>

                </div>

                <div className="w-full h-[400px] text-2xl text-primary flex flex-col">
                    <Link to="/admin" className="w-full flex h-[50px] items-center gap-[10px]"><FaTruck />Orders</Link>
                    <Link to="/admin/products" className="w-full flex h-[50px] items-center gap-[10px]"><AiFillProduct />Product</Link>
                    <Link to="/admin/review" className="w-full flex h-[50px] items-center gap-[10px]"><MdRateReview />Review</Link>
                    <Link to="/admin/users" className="w-full flex h-[50px] items-center gap-[10px]"><FaUsers />Users</Link>

                </div>

            </div>

            <div className="w-[calc(100%-300px)]  h-full bg-primary border-[5px] rounded-3xl border-secondary overflow-y-scroll">
                <Routes>
                    
                <Route path="/" element={<h1>Orders</h1>}/>
                <Route path="/products" element={<h1>Products</h1>}/>
                <Route path="/review" element={<h1>Review</h1>}/>
                <Route path="/users" element={<h1>Users</h1>}/>
                
                
                </Routes>
               
            </div>

            
        </div>
    )
}