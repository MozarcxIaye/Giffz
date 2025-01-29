import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Outlet } from 'react-router-dom';

const ButtonswithArrow = ({text, children}) => {
    return (
        <button className="mt-6 px-6 py-3 bg-[#F82BA9] rounded-md hover:bg-[#e03fa2] relative flex gap-1 items-center text-sm text-white">
            {children}
            {text} <IoIosArrowForward />
        </button>
    )
}

export default ButtonswithArrow