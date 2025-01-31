import occassion from '../../../assets/occasion1.png'
import occassion2 from '../../../assets/occasion2.png'
import occassion3 from '../../../assets/ocassion3.png'
import ButtonswithArrow from '@/components/ReusableComponent/buttons/ButtonswithArrow'


const Occasions = () => {
    return (
        <div className="flex justify-center items-center gap-8 bg-[#F7F7F7] h-[53vh]">
            {/* occasion 1 - Valentines */}
            <div className="rounded-xl relative drop-shadow-lg">
                <img src={occassion} alt="valentine occasion" className='w-full' />
                <div className='absolute top-0 m-4 max-w-40 text-gray-800'>
                    <span>Valentine's Day </span>
                    <b className='text-lg'>Awesome Gift </b> <span className='text-[#F82BA9] font-bold text-lg'>Box Collection</span>

                </div>

                {/* shop now */}
                <div className='absolute bottom-0 right-0 underline decoration-dashed text-gray-800 underline-offset-4 m-4'>
                    Shop Now
                </div>
            </div>

            {/* occasion 2 - Occasions */}
            <div className="relative rounded-xl drop-shadow-lg">
                <img src={occassion2} alt="occasion" className='w-full' />

                <div className='absolute top-1/3 right-0 m-4 max-w-40 text-gray-800 text-right'>
                    <div>Occasion Gift </div>
                    <b className='text-lg'>Best Occasion</b> <span className='text-[#F82BA9] font-bold text-lg'>Gift Collection</span>

                </div>

                {/* shop now */}
                <div className='absolute bottom-0 right-0 underline decoration-dashed text-gray-800 underline-offset-4 m-4'>
                    Shop Now
                </div>

            </div>

            {/* occasion 3 - Dashain */}
            <div className="flex relative items-center justify-start rounded-lg overflow-hidden drop-shadow-lg">
                {/* description section */}
                <div className="z-10 absolute bg-[#FEEDF7] h-full flex flex-col w-2/4 justify-center items-start px-6">
                    <span className='text-lg font-dancingScript font-bold text-black'>Dashain Sale</span>
                    <span className='text-4xl font-dancingScript text-[#C92686] font-bold'>Up To 40% Off</span>
                    <div className='mt-4'>
                        <ButtonswithArrow text={"View Details"} />
                    </div>
                </div>
                <img src={occassion3} alt="dashain occasion" className='w-full' />
            </div>

        </div>
    )
}

export default Occasions