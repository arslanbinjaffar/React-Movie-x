import {FC} from 'react'
import ContentWrapper from '../../../contentWrapper/contentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../Carousel/Carousel';

const Trending = () => {
  const [endpoint,setEndpoint]=useState("day")
  const {loading,data}=useFetch(`/trending/all/${endpoint}`)
  const OnTabChange=(tab:string,indx:number)=>{
       setEndpoint(tab==="Day"?"day":"week");
  }
  
    return (
        <section className='carousel-section'>
      <ContentWrapper>
        <span className='carousel-title'>Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabOnChange={OnTabChange}/>
      </ContentWrapper>
        <Carousel data={data} loading={loading}/>
        </section>
  )
}

export default Trending