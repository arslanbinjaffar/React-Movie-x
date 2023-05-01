import {FC} from 'react'
import ContentWrapper from '../../../contentWrapper/contentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../Carousel/Carousel';

const Popular = () => {
  const [endpoint,setEndpoint]=useState("movie")
  const {loading,data}=useFetch(`/${endpoint}/popular/`)
  const OnTabChange=(tab:string,indx:number)=>{
       setEndpoint(tab==="Movie"?"movie":"tv");
  }
  
    return (
        <section className='carousel-section'>
      <ContentWrapper>
        <span className='carousel-title'>What's Popular</span>
        <SwitchTabs data={["Movies","Tv show"]} onTabOnChange={OnTabChange}/>
      </ContentWrapper>
      {data != null && <Carousel data={data} loading={loading} endpoint={endpoint}/>}
        </section>
  )
}

export default Popular