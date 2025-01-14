import React from 'react'
import logo from "../../../assets/logo.png"


const Footer = () => {
  return (
    <div className='bottom-0 absolute w-full bg-[#3D3269]'>
      <footer className="footer text-base-content p-10 ">
        <aside>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" srcset="" />
            <p className="text-4xl">Giffz</p>
          </div>
          <p className="max-w-64">
            Your One-Stop Shop for Thoughtful Gifts. Shop Unique Gifts for Everyone on Your List.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-white border-b pb-2">Quick links</h6>
        
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Delivery Info</a>
          <a className="link link-hover">Our Testimonials</a>
          <a className="link link-hover">Term of Services</a>
          <a className="link link-hover">Privacy Policy</a>

        </nav>
        <nav>
          <h6 className="footer-title text-white border-b pb-2">Browser Category</h6>
          <a className="link link-hover">Jewelry & accessories</a>
          <a className="link link-hover">House & Living</a>
          <a className="link link-hover">Occasion Gifts</a>
          <a className="link link-hover">Stationary & Stationery</a>
          <a className="link link-hover">Gift Boxes</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white border-b pb-2">Support Center</h6>
          <a className="link link-hover">FAQ’s</a>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">How to Buy</a>
          <a className="link link-hover">Track Your Order</a>
          <a className="link link-hover">Returns Policy</a>
          <a className="link link-hover">Site Map</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white border-b pb-2">We Accept</h6>
          <a className="link link-hover">Esewa</a>

        </nav>
      </footer>

      <div className='text-sm flex-col'>
        <ul className='flex justify-center gap-4 border-dashed border-b py-2'>
          <li><span className='font-semibold'>Address:</span> 260 Balkumari, Lalitpur</li>
          <li><span className='font-semibold'>Email:</span>  giffiz22@gmail.com</li>
          <li><span className='font-semibold'>Tel:</span> (416) 369-1146</li>
          <li><span className='font-semibold'>Time:</span>  Monday-Friday (8:30AM - 9:00PM)</li>
        </ul>
        <p className='flex justify-center items-center py-2'>©  2024 Giffiz All Right Reserved.</p>
      </div>
    </div>

  )
}

export default Footer