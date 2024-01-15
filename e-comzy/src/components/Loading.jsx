import './Loading.css'

export function Loading(){
    return(
        <div className='flex flex-col justify-center items-center h-screen'>
            
            <div className="spinner"></div>
            <h1 className='mt-2 text-lg font-semibold'>Loading...</h1>
        </div>
    )
}