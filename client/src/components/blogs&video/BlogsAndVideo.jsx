import React from 'react'
import ButtonswithArrow from '../ReusableComponent/buttons/ButtonswithArrow'

const BlogsAndVideo = () => {
  return (
    <div className='flex h-[60vh] bg-white items-center justify-center border'>
      {/* header */}
      <div className='flex justify-center items-center border w-full'>
        <div className='border'>
          Our Latest <span>Blogs & Video</span>
        </div>

        <div>
          <ButtonswithArrow text='View Details' />
        </div>

      </div>
    </div>
  )
}

export default BlogsAndVideo