import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='p-10 bg-green-800 text-center'>
            <div className=" tracking-xl header__logo text-white text-lg font-bold pointer">Jeremiah <span
                className='text-green-500 bg-white px-2 py-0.5 rounded tracking-wide'>LENA</span></div>
            <p className="text-white">Designed by Jeremiah Lena &copy; 2020</p>
        </footer>
    )
}

export { Footer }