import React from 'react';
import Text from '../../../units/Text';
import ButtonswithArrow from '../../ReusableComponent/buttons/ButtonswithArrow';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import giftbox from "../../../assets/specialgiftbox.png"
import arrow2 from "../../../assets/arrow2.png"


const Explore = () => {
  return (
    <div className='flex flex-col md:flex-row h-[60vh] justify-around items-center bg-[#fff] px-8 pt-8'>
      {/* Explore description */}
      <div className="text-center md:text-left md:mr-10 flex flex-shrink-0 max-w-xs md:max-w-sm flex-wrap">
      <Text className='text-[#F82BA9] font-Montserrat'>Premium Gifts</Text>
        <Text className="font-Montserrat">
          Experience <span className='text-[#F82BA9]'>Premium Gifts</span> and Products
        </Text>
        <div>
          <ButtonswithArrow text='Explore Now'>
            <img src={arrow2} alt="" className='absolute left-44 bottom-0' />
          </ButtonswithArrow>
        </div>
      </div>

      {/* Carousel component */}
      <div className="mt-6 md:mt-0 w-full md:w-[50%] flex flex-grow-0">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[800px]"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <Card className="h-[220px] relative">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-4">
                      <div className="w-full h-full flex items-center justify-center flex-col">
                        <img src={giftbox} alt="" className='w-3/4 object-contain' />
                        <div className='bg-[#FEEDF7] absolute w-full bottom-0 flex justify-center items-center '>
                          {/* img category */}
                          <Text className="text-gray-600 text-[16px] font-Montserrat">Special Gift Box</Text>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                      <div className='flex justify-between items-center w-full mt-4 px-2'>
                        <span className='font-semibold text-[#F82BA9]'>Rs. 1500</span>
                        <button className='border border-[#F82BA9] text-[#F82BA9] px-4 py-1 rounded-lg hover:bg-[#F82BA9] hover:text-white'>
                          Cart
                        </button>
                      </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="scale-150 bg-[#F82BA9]" />
          <CarouselNext className="scale-150 bg-[#F82BA9]" />
        </Carousel>
      </div>
    </div>
  );
};

export default Explore; 