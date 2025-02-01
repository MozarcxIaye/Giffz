import React from 'react'
import Main from './home/Main'
import Explore from './explore/Explore'
import Occasions from './occasions/Occasions'
import BestDeals from './bestDeals/BestDeals'
import BlogsAndVideo from '../blogs&video/BlogsAndVideo'
import ImageGallery from './ImageGallery/ImageGallery'
import { Gallery } from './ImageGallery/Gallery'

const Home = () => {
  return (
    <div>
      <Main />
      <Explore />
      <Occasions />
      <BestDeals />
      <BlogsAndVideo />
      <Gallery />
    </div>
  )
}

export default Home