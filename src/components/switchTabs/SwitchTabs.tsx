import Wrapper from './style'
import { FC, useState } from 'react';
interface SwitchProps{
    data:string[]
    onTabOnChange:(tab:string,indx:number)=>void;
}
const SwitchTabs:FC <SwitchProps> = ({data,onTabOnChange}) => {
    const [actived,setActived]=useState(0)
    const [left,setLeft]=useState(0)
    const activeTab=(tab:string,indx:number)=>{
           setLeft(indx*100)
           setTimeout(()=>{
           setActived(indx)
           },300)
           onTabOnChange(tab,indx)
    }
  return (
    <Wrapper>
            <div className="tab-items">
                {data.map((item,indx)=>{
                    return(
                    <span key={indx} className={`tab-item ${actived===indx?'active':"null"}`} onClick={()=>activeTab(item,indx)}>
                        {item}
                    </span>
                    )
                })}
                <span className='moving-bg' style={{left:left}}/>
            </div>
    </Wrapper>
  )
}

export default SwitchTabs