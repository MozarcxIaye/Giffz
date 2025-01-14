import React from 'react'
import InfoNav from './InfoNav'
import logo from "../../../assets/logo.png"
import Text from '../../../units/Text'
import Button from '../../../units/Button'

const Navbar = () => {
  return (
    <div>
      <InfoNav />
      {/* <p>Navbar</p> */}
      <nav className='bg-[#FEEDF7] flex items-center justify-around py-2'>
        {/* logo */}
        <div className='flex items-center gap-3'>
          {/* logoimg */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* logo description */}
          <div className='flex flex-col text-sm'>
            <span className='uppercase text-[#C92686]'>Welcome to Giffz</span>
            <span className='capitalize text-slate-600'>Find your <span className='text-[#C92686]'>Perfect Gift</span> Options Here</span>
          </div>
        </div>

        {/* right nav */}
        <div className='flex items-center gap-4'>
          <label className="input input-bordered flex items-center gap-2 bg-transparent">
            <input type="text" className="grow h-8" placeholder="Search..." />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>

          <button className='outline outline-1 outline-[#D451AC] text-[#D451AC] rounded-md px-8 py-2 '>
            Cart
          </button>

          <button className='bg-[#D4519E] text-white px-4 rounded-md outline outline-1 outline-[#D4519E] py-2'>Sign up</button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar