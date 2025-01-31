import React from 'react'
import Main from './home/Main'
import Explore from './explore/Explore'
import Occasions from './occasions/Occasions'
import BestDeals from './bestDeals/BestDeals'
import BlogsAndVideo from '../blogs&video/BlogsAndVideo'

const Home = () => {
  return (
    <div>
      <Main />
      <Explore />
      <Occasions />
      <BestDeals />
      <BlogsAndVideo />
    </div>
  )
}

export default Home