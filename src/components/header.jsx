import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] bg-accent flex " >
            <img src="/logo.png" className="w-[100px]" alt="logo" />

            <div className="w-full h-full flex items-center justify-center gap-5 text-xl">
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
            </div>

        </header>
    )
}