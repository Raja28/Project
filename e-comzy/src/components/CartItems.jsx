import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../features/product/productSlice";
import toast from "react-hot-toast";
import { FaRupeeSign } from "react-icons/fa";

export function CartItems({ item, index }) {
    // console.log(item, index);
    const dispatch = useDispatch()

    function removeItemHandler() {
        dispatch(remove(item.id))
        toast.error("Item removed")
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-[35vh] relative border-b-2 border-red-400">

            <div className="flex ml-10 absolute top-4">

                <div className=" max-h-[10rem] max-w-[140px] border-black  mr-4 flex justify-center items-center">
                    <img src={item.image}  className="max-h-[100%]" />
                </div>

                <div className="">
                    <h2 className="text-gray-700 text-lg font-semibold text-left mt-1">
                        {item.title.split(" ").slice(0, 8).join(" ")}
                    </h2>

                    <p className="text-gray-500 text-[15px]">
                        {item.description.split(" ").slice(0, 15).join(" ")+"..."}
                    </p>
                </div>
            </div>

            {/* <div> */}
            <div className=" w-[60%] h-8 flex justify-between absolute bottom-7 right-8">
                <p className="flex text-green-600 font-semibold items-center ">
                    <FaRupeeSign />{item.price}
                </p>
                <span
                    className="my-auto border-2 border-red-400 p-2 rounded-full bg-red-200 hover:bg-red-500
                    transition duration-200 hover:scale-110 ease-in"
                    onClick={removeItemHandler}
                >
                    <MdDelete className="text-lg"/>
                </span>
            </div>
            {/* </div> */}

            




        </div>
    )
}