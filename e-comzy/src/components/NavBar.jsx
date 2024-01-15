
export function Navbar(){
    return(
        <nav className="  flex justify-between items-center max-w-6xl h-16 border-2 mx-auto">

                <NavLink to='/'>
                    <div className="ml-5">
                        <img src='./logo.png' alt="icon" width={100} />
                    </div>
                </NavLink>

                <div className="flex">
                    <NavLink to='/' className="">
                        <span className="border">Home</span>
                    </NavLink>

                    <NavLink className="">
                        <span>
                            <FaShoppingCart />
                        </span>
                    </NavLink>
                </div>
            </nav>
    )
}