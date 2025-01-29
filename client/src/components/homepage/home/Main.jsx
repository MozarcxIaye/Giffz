import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import arrow from "../../../assets/arrow.png"
import carousel1 from "../../../assets/carousel1.png"
import Features from '../features/Features';

const Main = () => {
    // State to track the current slide
    const [currentSlide, setCurrentSlide] = useState(1);

    // Total number of slides
    const totalSlides = 4;

    // Function to navigate to the next slide
    const goToNextSlide = () => {
        const nextSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
        document.getElementById(`slide${nextSlide}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setCurrentSlide(nextSlide);
    };

    // Function to navigate to the previous slide
    const goToPreviousSlide = () => {
        const prevSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
        document.getElementById(`slide${prevSlide}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setCurrentSlide(prevSlide);
    };

    return (
        <div className="relative w-full h-[600px]">
            {/* Slides Container */}
            <div className="carousel w-full h-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Shared Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center text-white pl-40">
                <div className='flex flex-col items-center justify-center '>

                    <h2 className="text-4xl font-bold font-dancingScript">Find Your <span className='text-6xl text-[#C92686]'>Perfect Gift</span></h2>
                    <p className="mt-4 text-4xl font-dancingScript font-bold">Options Here</p>
                    <button className="mt-6 px-6 py-3 bg-[#F82BA9] rounded-md hover:bg-[#e03fa2] relative flex gap-1 items-center text-sm">
                    <img src={arrow} alt="" className='absolute left-32 bottom-2' />
                        Shop Now <IoIosArrowForward />
                    </button>
                </div>
            </div>

            {/* Shared Navigation Buttons */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={goToPreviousSlide} className="btn btn-circle">❮</button>
                <button onClick={goToNextSlide} className="btn btn-circle">❯</button>
            </div>

            <Features />
        </div>
    );
};

export default Main;
