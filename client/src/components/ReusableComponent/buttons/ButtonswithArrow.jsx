import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Outlet } from 'react-router-dom';

const ButtonswithArrow = ({text, children}) => {
    return (
        <button className="px-6 py-2 bg-[#F82BA9] rounded-md hover:bg-[#e03fa2] relative flex gap-1 items-center text-sm text-white font-semibold">
            {children}
            {text} <IoIosArrowForward />
        </button>
    )
}

export default ButtonswithArrow