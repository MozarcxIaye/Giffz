import giftbox from "../../../assets/specialgiftbox.png";
import { Card, CardContent } from "@/components/ui/card";

const DiscountedItems = () => {
    return (
        <div className="flex items-center justify-center relative bg-white w-full h-[25vh]">
            <div className="absolute -top-28 z-10 flex gap-4 w-[800px] overflow-hidden justify-center">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="w-1/3">
                        <Card className="h-[220px] relative overflow-hidden drop-shadow-md">
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-4">
                                <div className="w-full h-full flex items-center justify-center flex-col">
                                    <img src={giftbox} alt="Special Gift Box" className='w-3/4 object-contain' />
                                    <div className='bg-[#FEEDF7] absolute w-full bottom-0 flex justify-center items-center'>
                                        <span className="text-gray-600 font-Montserrat text-[16px]">Special Gift Box</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <div className='flex justify-between items-center w-full mt-3 px-2'>
                            <div className="price flex gap-2 font-poppins">
                                <span className='line-through text-[#4D4D4D]'>Rs. 1500</span>
                                <span className="font-bold text-[#F82BA9]">Rs. 1000</span>
                            </div>
                            <button className='border border-[#F82BA9] text-[#F82BA9] px-4 py-1 rounded-lg hover:bg-[#F82BA9] hover:text-white'>
                                Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscountedItems;
