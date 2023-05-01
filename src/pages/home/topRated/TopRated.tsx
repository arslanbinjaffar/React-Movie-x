import {FC} from 'react'
import ContentWrapper from '../../../contentWrapper/contentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../Carousel/Carousel';

const TopRated = () => {
  const [endpoint,setEndpoint]=useState("movie")
  const {loading,data}=useFetch(`/${endpoint}/top_rated/`)
  const OnTabChange=(tab:string,indx:number)=>{
       setEndpoint(tab==="Movie"?"movie":"tv");
  }
  
    return (
        <section className='carousel-section'>
      <ContentWrapper>
        <span className='carousel-title'>Top Rated</span>
        <SwitchTabs data={["Movies","Tv show"]} onTabOnChange={OnTabChange}/>
      </ContentWrapper>
      {data != null && <Carousel data={data} loading={loading} endpoint={endpoint}/>}
        </section>
  )
}

export default TopRated;