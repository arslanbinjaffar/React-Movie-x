import React from 'react'
import HeroBanner from './banner/heroBanner'
import Trending from './trending/Trending'
import Wrapper from './style'
import Popular from './Popular/Popular'
import TopRated from './topRated/TopRated'
import Latest from './Latest/Latest'

const Home = () => {
  return (
    <Wrapper>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      {/* <Latest/> */}
    </Wrapper>
  )
}

export default Home