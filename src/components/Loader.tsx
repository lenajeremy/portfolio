import { FC } from "react"


export const Loader:FC<{dotColor?: string}> = ({dotColor}) => {
    return (
        <div className='loaderContainer col-span-4 row-span-2'>
            <div className={`dot ${dotColor || 'bg-green-600'}`}></div>
            <div className={`dot ${dotColor || 'bg-green-600'}`}></div>
            <div className={`dot ${dotColor || 'bg-green-600'}`}></div>
        </div>
    )
}