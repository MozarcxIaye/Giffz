import React from 'react';
import Text from '../../../units/Text';
import ButtonswithArrow from '../../ReusableComponent/buttons/ButtonswithArrow';

const Explore = () => {
  return (
    <div className='flex h-[50vh] justify-center items-center bg-[#fff]'>
      {/* Explore description */}
      <div>
        <Text className='text-[#F82BA9]'>Premium Gifts</Text>
        <Text>
          Experience <span className='text-[#F82BA9]'>Premium Gifts</span> and Products
        </Text>
        <div>
          <ButtonswithArrow text='Explore Now' />
        </div>
      </div>
      {/* Carousel card component */}
    </div>
  );
};

export default Explore;
