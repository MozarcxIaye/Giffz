import React from 'react'
import ButtonswithArrow from '../ReusableComponent/buttons/ButtonswithArrow'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TbMessageDots } from "react-icons/tb";
import blog from "../../assets/blog.png"

const BlogsAndVideo = () => {
  return (
    <div className='flex h-[65vh] bg-white items-start justify-center py-4'>
      <div className='flex justify-center items-center w-10/12 flex-col gap-8'>
        {/* header */}
        <div className='flex justify-between items-center w-full'>
          <div className='text-2xl text-[#4D4D4D] font-bold'>
            Our Latest <span className='text-[#F82BA9]'>Blogs & Video</span>
          </div>

          <div>
            <ButtonswithArrow text='View Details' />
          </div>
        </div>
        {/* blogs */}
        <div className="mt-6 md:mt-0 w-full md:w-[80%] flex justify-center flex-grow-0 select-none">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[1000px]"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div>
                    <Card className="h-[360px] relative overflow-hidden">
                      <CardContent className="flex flex-col h-full items-center justify-center p-0">
                        <div className="w-full h-full flex flex-col">
                          <img src={blog} alt="" className='w-full h-[240px] object-cover' />
                          {/* Blog info */}
                          <div className='bg-[#FEEDF7] h-full px-4 py-2 flex flex-col gap-1' >
                            {/* blog head */}
                            <div className='flex justify-between items-center gap-2'>
                              <span className='font-bold text-[#4D4D4D] font-Montserrat text-sm'>The Art of Gift-Giving: Tips for Choosing the Perfect Present </span>
                              <span className='bg-[#FACFEA] border rounded-full p-2'><TbMessageDots className='text-[#F82BA9] text-xl' /></span>
                            </div>

                            {/* blog description */}
                            <div className='text-[12px] text-[#575757]'>
                              <span>A guide to understanding your recipient’s preferences and selecting gifts that truly resonate.</span>
                            </div>

                            {/* readmore btn  */}
                            <div className='mt-2'>
                              <ButtonswithArrow text="Read More"/>
                            </div>

                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="scale-150 bg-[#F82BA9]" />
            <CarouselNext className="scale-150 bg-[#F82BA9]" />
          </Carousel>
        </div>

      </div>
    </div>

  )
}

export default BlogsAndVideo