import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

// Reusable component for icon and text
const IconWithText = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-1">
        <Icon style={{ width: '20px', height: '20px' }} />
        <p className='font-serif cursor-pointer hover:underline underline-offset-8 decoration-dashed'>{text}</p>
    </div>
);

const InfoNav = () => {
    return (
        <div className="bg-[#D4519E] flex text-white justify-between px-24 py-2 items-center">

            <div className='flex gap-4'>

                {/* Social Media Icons */}
                <div className="flex gap-2">
                    {[  
                        { icon: FaFacebookF },
                        { icon: IoLogoInstagram },
                        { icon: FaXTwitter },
                        { icon: FaLinkedinIn },
                    ].map(({ icon: Icon }, idx) => (
                        <div key={idx} className="bg-white p-2 rounded-full w-max cursor-pointer hover:bg-[#2a2a2a]  duration-200 ">
                            <Icon style={{ width: '14px', height: '14px', color: '#D4519E' }} />
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div className="flex gap-4">
                    <IconWithText icon={PiPhoneCall} text="+977-9826464346" />
                    <IconWithText icon={MdOutlineMarkEmailUnread} text="giffz11@gmail.com" />
                </div>
            </div>


            {/* Other Info */}
            <div className="flex gap-4">
                <IconWithText icon={FaTruckFast} text="Track Order" />
                <IconWithText icon={CiLocationOn} text="Nepal" />
            </div>
        </div>
    );
};

export default InfoNav;
