import { FC, KeyboardEventHandler, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux';
import Wrapper from './style';
import Img from '../../../lazyImageloading/Image';
import ContentWrapper from '../../../contentWrapper/contentWrapper';
interface State{
  home:{
    url:{
      backDrop:string
    }
  }
}
const HeroBanner = () => {
    const url = useSelector((state:State) => state.home.url)
    const [background,setBackGround]=useState("")
    const [query,setQuery ]=useState<string|any>("")
    const Navigate=useNavigate();
    const {data,loading}=useFetch('/movie/popular')
    useEffect(()=>{
       const bg=url?.backDrop+data?.results[Math.floor(Math.random()*20)].backdrop_path;
      setBackGround(bg.toString())
    },[data])
    const handleSearchQuery:KeyboardEventHandler<HTMLElement>=(e)=>{
          if(e.key ==="Enter" && query.length>0){
            Navigate(`/search/${query}`);
          }
    };
  
  return (
    <Wrapper className='heroBanner'>
      {!loading &&  <div className="backdrop-img">
          {background && <Img src={background}/>}
        </div>}
        <div className='opacity-layer'></div>
        <ContentWrapper >
            <div className="hero-content">
                <span className="title">Welcome</span>
                <span className="sub-title">Millions of movies,Tv shows and people to discover, Explore now</span>
            </div>
            <div className='input-container'>
            <input type="search" title='enter pressed' value={query} 
            placeholder='enter your movie search'
            onChange={(e)=>setQuery(e.target.value)} onKeyDown={handleSearchQuery} />
            <button type='submit' onKeyDown={handleSearchQuery}>search</button>
            </div>
      
        </ContentWrapper>
    </Wrapper>
  )
}

export default HeroBanner