import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";


export function Header() {
    const cart = useSelector(state => (state))
    
    return (
        <header className=" bg-slate-900 ">
            <nav className="flex justify-between items-center max-w-6xl h-16 mx-auto">

                <div className="ml-12">
                    <NavLink to='/'>
                        <img src='./logo.png' alt="logo" width={110} />
                    </NavLink>
                </div>

                <div className="flex items-center font-medium text-slate-600 mr-12 space-x-5">

                    <div className="text-slate-200 font-semibold">
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </div>

                    <div>
                        <NavLink to='/cart' className="relative">
                            <FaShoppingCart className="text-2xl text-slate-200" />
                            {
                                cart.length > 0? (
                                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5
                                flex items-center justify-center rounded-full animate-bounce">
                                    {cart.length}
                                </span>):(<></>)
                            }
                        </NavLink>
                    </div>

                </div>
            </nav>

        </header>
    )
}