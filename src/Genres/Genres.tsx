import {FC} from 'react'
import { useSelector } from 'react-redux'
import Wrapper from './style';
interface GenreProps{
    data:number[]
}
interface GenresState {
  home:{
    genres: {
      id: number;
      name: string;
    }[];
  }
}
const Genres:FC<GenreProps> = ({data}) => {
  const genres=useSelector((state:GenresState)=>state.home.genres)

  return (
    <Wrapper className='genres'>
      {data?.map((g,indx)=>{
        if(!genres[g]?.name) return;
         return(
          <div key={g} className='genre'>
            {genres[g]?.name}
          </div>
         )
      })}
    </Wrapper>
  )
}

export default Genres