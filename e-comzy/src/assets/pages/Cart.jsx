import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartItems } from "../../components/CartItems";
import { TfiFaceSad } from "react-icons/tfi";



export function Cart() {
    const cart = useSelector(state => state)
    const [totalAmt, setTotalAmt] = useState(0)
    // console.log(cart);

    useEffect(() => {
        let cost = cart.reduce((acc, item) => acc + item.price, 0)
        // console.log(cost);
        setTotalAmt(cost)
    }, [cart])


    return (
        <div>
            {
                cart.length > 0 ? (
                    <div className="flex max-w-6xl min-h-screen mt-2 mx-auto">

                        <div className="w-[50%] ">
                            {
                                cart.map((item, index) => (
                                    <CartItems key={nanoid()} item={item} index={index} />
                                ))
                            }
                        </div>

                        {/* right-part */}
                        <div className=" flex flex-col  justify-between w-[30%] mt-4 ml-6">

                            <div>
                                <p className="text-green-600 text-xl font-bold mb-1">Your Cart</p>
                                <h2 className="text-green-600 text-2xl font-semibold mb-1">SUMMARY</h2>
                                <p className="font-bold">Total items: {cart.length}</p>
                            </div>

                            <div>

                                <p className="font-semibold">Total price: <span className="font-extrabold">{totalAmt.toFixed(2)}</span></p>
                                <div className=" bg-green-600 text-white text-xl font-bold font mb-1 flex justify-center items-center pt-2 pb-2 mt-2
                                        hover:bg-green-700 transition duration-200">
                                    <NavLink to='/'>
                                        <button>CHECK OUT</button>
                                    </NavLink>
                                </div>
                            </div>



                        </div>

                        <div>

                        </div>

                    </div>


                ) : (
                    <div className="flex flex-col min-h-[80vh] justify-center items-center">
                        <span><TfiFaceSad className="text-5xl m-4" /></span>
                        <div className="text-2xl dark:text-gray-600 font-bold"> <p>Cart is Empty</p> </div>
                        <NavLink to='/' className='border mt-2 px-2 text-lg bg-green-500 rounded-md text-white hover:bg-green-600 shadow-xl'>
                            <button>Shop Now</button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}