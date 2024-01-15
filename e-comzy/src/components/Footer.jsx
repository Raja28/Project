import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export function Footer() {
    return (
        <div className="max-w-full h-[12rem] bg-[#2e1065]">
            <div className=" max-w-6xl h-full mx-auto flex justify-between mt-14 p-4">
                
                <div className="flex flex-col  w-[14rem] p-2 ml-12">
                    <img src="./logo.png" width={130} className="m-1" />
                    <div className="text-slate-200 font-semibold">
                        <p>110, I-Tower, New Delhi</p>
                        <p>9876543210</p>
                        <p>hello@ecomzy.com</p>
                    </div>
                </div>



                <div className=" flex flex-col items-center justify-center w-[52rem]">
                    <div className="flex text-2xl p-1 space-x-8 ">
                        <span className=" p-1.5 rounded-full bg-blue-600 hover:scale-105
                        border-blue-600 text-white transition duration-200" ><FaFacebook /></span>
                        
                        <span className=" p-1.5 rounded-full bg-black border-black hover:scale-105
                        text-white transition duration-200" ><FaXTwitter /></span>
                       
                        <span className=" p-1.5 rounded-full bg-orange-700 hover:scale-105
                         border-orange-700 text-white transition duration-200" ><FaInstagram /></span>
                        
                        <span className=" p-1.5 rounded-full bg-red-600 hover:scale-105
                         border-red-600 text-white transition duration-200" ><FaYoutube /></span>
                        
                        <span className=" p-1.5 rounded-full bg-blue-600 hover:scale-105
                         border-blue-600 text-white transition duration-200"> <FaLinkedin /></span>
                    </div>
                    <div className="flex flex-col mt-2">
                        <div className="flex mx-auto space-x-8 text-1xl text-slate-200 font-bold">
                            <p>HOME</p>
                            <p>GALLERY</p>
                            <p>SERVICES</p>
                            <p>ABOUT</p>
                            <p>CONTACT US</p>
                        </div>

                        <div className="flex mx-auto space-x-4 text-slate-200 font-bold mt-2">
                            <p>PRODUCT</p>
                            <p>NEW</p>
                            <p>MEDIA</p>
                            <p>BLOG</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}