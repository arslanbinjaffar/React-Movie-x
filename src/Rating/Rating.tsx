import Wrapper from './style'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface props{
    rating:number
}
const Rating:React.FC<props> = ({rating}) => {
    const ratingString = rating.toString();
  return (
    <Wrapper>
     <CircularProgressbar value={rating} maxValue={10} text={ratingString} styles={buildStyles({
        pathColor:rating<5?"red":rating<7?"organe":"green"
     })}/>
    </Wrapper>
  )
}

export default Rating