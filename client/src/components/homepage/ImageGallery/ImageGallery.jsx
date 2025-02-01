// import Image from "next/image";
import imggallery1 from "../../../assets/imggallery1.png"
import imggallery2 from "../../../assets/imggallery2.png"
import imggallery3 from "../../../assets/imggallery3.png"
import imggallery4 from "../../../assets/imggallery4.png"
import imggallery5 from "../../../assets/imggallery5.png"
import imggallery6 from "../../../assets/imggallery6.png"
import imggallery7 from "../../../assets/imggallery7.png"

// const images = [
//     imggallery1,
//     imggallery2,
//     imggallery3,
//     imggallery4,
//     imggallery5,
//     imggallery6,
//     imggallery7,

// ];


const ImageGallery = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-6 grid-rows-2 gap-2">
                {/* Main featured image (left side) */}
                <div className="row-span-2 col-span-2 aspect-square border h-full w-3/4">
                    <img
                        src={imggallery1}
                        alt="Main gallery"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Top row right section */}
                <div className="col-span-2 col-start-3 aspect-video border h-full">
                    <img
                        src={imggallery2}
                        alt="Gallery 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="col-span-1 aspect-square h-full">
                    <img
                        src={imggallery3}
                        alt="Gallery 3"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="col-span-1 aspect-square">
                    <img
                        src={imggallery4}
                        alt="Gallery 4"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Bottom row right section */}
                <div className="col-span-1 aspect-square">
                    <img
                        src={imggallery5}
                        alt="Gallery 5"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="col-span-1 aspect-square">
                    <img
                        src={imggallery6}
                        alt="Gallery 6"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="col-span-2 aspect-[3/2]">
                    <img
                        src={imggallery7}
                        alt="Gallery 7"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageGallery

