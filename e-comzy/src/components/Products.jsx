import { useDispatch, useSelector } from "react-redux"
import { add, remove } from "../features/product/productSlice"
import toast from "react-hot-toast"
import { FaRupeeSign } from "react-icons/fa";


export function Products({ post }) {

    const cart = useSelector(state => state)
    const dispatch = useDispatch()

    function addItemHandler() {
        dispatch(add(post))
        toast.success("Item added")
    }

    function removeItemHandler() {
        dispatch(remove(post.id))
        toast.error("Item removed")
    }

    return (
        <div className="flex flex-col items-center justify-between border-2 border-gray-500
        hover:scale-105 sc transition duration-200 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl">

            <div className="text-gray-700 text-lg font-semibold text-left truncate w-40 mt-1">
                {post["title"]}
            </div>

            <div>
                <p className="w-40 text-gray-500 text-normal text-[10px]">
                    {post["description"].split(" ").slice(0, 10).join(" ") + "..."}
                </p>
            </div>

            <div className="h-[180px]">
                {<img src={post["image"]} className="w-full h-full" />}
            </div>

            <div className="flex justify-between w-full">
                <span>
                    <p className="text-green-600 font-semibold flex items-center"> <FaRupeeSign />{post["price"]}</p>
                </span>
                
                <div >
                    {
                        cart.some((p) => p.id == post.id) ? (
                            <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                            text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transit duration-200"
                            onClick={removeItemHandler}>
                                Remove Item
                            </button>) :
                            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                            text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transit duration-200"
                            onClick={addItemHandler}>
                                Add Item
                            </button>)
                    }
                </div>
            </div>



        </div>
    )
}