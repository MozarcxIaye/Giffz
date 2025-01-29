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

const Explore = () => {
  return (
    <div className='flex flex-col md:flex-row h-[50vh] justify-center items-center bg-[#fff]'>
      {/* Explore description */}
      <div className="text-center md:text-left md:mr-10">
        <Text className='text-[#F82BA9]'>Premium Gifts</Text>
        <Text>
          Experience <span className='text-[#F82BA9]'>Premium Gifts</span> and Products
        </Text>
        <div>
          <ButtonswithArrow text='Explore Now' />
        </div>
      </div>
      
      {/* Carousel component */}
      <div className="mt-6 md:mt-0">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Explore;
