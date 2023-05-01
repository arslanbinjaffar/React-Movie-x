import {FC, useRef} from 'react'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ContentWrapper from '../contentWrapper/contentWrapper'
import Img from '../lazyImageloading/Image'
import PosterFallBack from '../assets/no-poster.png'
import Wrapper from './style'
import dayjs from 'dayjs'
import Rating from '../Rating/Rating'
import Genres from '../Genres/Genres'
import { MovieData } from '../types/types'
interface carouselProps{
    loading:boolean | null
    endpoint?:string 
    data?:MovieData
} 
interface HomeState {
  home:{
    url: {
      base: string;
      poster: string;
      backdrop: string;
    };
  }
  // other properties...
}
type Url={
    poster: string;
    backdrop: string;
  
}

const SkItem=()=>{
  return(
    <div className='skeletonItem'>
      <div className="posterBlock skeleton"></div>
      <div className="textBlock skeleton">
        <div className="title skeleton"></div>
        <div className="date skeleton"></div>
      </div>
    </div>
    )
}

const Carousel:FC<carouselProps> = ({data,loading,endpoint}) => {
    const carouselContainer=useRef<HTMLDivElement>(null);
    const url=useSelector((state:HomeState)=>state.home.url)
    const navigate=useNavigate()    
    const navigation=(direction:string)=>{
        const container=carouselContainer.current;
        if(!container) return;
          const scrollAmout=direction==="left"?container.scrollLeft-(container.offsetWidth + 20):container.scrollLeft+(container.offsetWidth + 20);
          container.scrollTo({
            left:scrollAmout,
            behavior:"smooth",
          })
    }
  return (
    <Wrapper>
      <ContentWrapper>
        <BsFillArrowLeftCircleFill className='carouselLeftNav arrow' onClick={()=>navigation("left")}/>
        <BsFillArrowRightCircleFill className='carouselRighttNav arrow' onClick={()=>navigation("right")}/>
        {!loading ?(<div className='carouselItems' ref={carouselContainer}>
          {!loading && data?.results && data?.results.map((item)=>{            
            const posterUrl=item.poster_path?url?.poster+item.poster_path:PosterFallBack;
             return(
              <div className='carouselItem'onClick={()=>navigate(`/${item.media_type || endpoint}/${item.id}`)} key={item.id}>
                <div className="posterBlock">
                <Img src={posterUrl}/>
                <Rating rating={item.vote_average.toFixed(1)}/>
                <Genres data={item.genre_ids}/>
                </div>
                <div className="textBlock">
                  <span className='title'>{item.title || item.name}</span>
                  <span className='date'>{dayjs(item.release_Date).format( "MMM D, YYYY")}</span>
                </div>
              </div>
             )
          })}
        </div>):(<div className='loadingSkeleton'>
          {SkItem()}
          {SkItem()}
          {SkItem()}
          {SkItem()}
          {SkItem()}
          {SkItem()}
        </div>)}
      </ContentWrapper>
    </Wrapper>
  )
}

export default Carousel