import { useCallback, useEffect, useState } from "react";
import './Home.css'
import { Loading } from "../../components/Loading";
import { Products } from "../../components/Products";
import { nanoid } from '@reduxjs/toolkit'


export function Home() {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])


    const fetchData = useCallback(async () => {
        // async function(){
            try {
                const data = await fetch(API_URL)
                const result = await data.json()

                setPosts(result)
                setLoading(false)
                // console.log(posts);

            } catch (error) {
                console.log(error, "While fetching data");
            }
            console.log("in call back");
        // }
    }, [])

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            {
                loading ? (<Loading />) : (
                    posts.length > 0 ? (
                        <div className="grid grid-cols-4 max-w-6xl min-w-[650px] p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]
                        ">
                            {posts.map((post) => (

                                <Products key={nanoid()} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center">
                            <P>No Data found!</P>
                        </div>
                    )
                )
            }
        </div>
    )


}