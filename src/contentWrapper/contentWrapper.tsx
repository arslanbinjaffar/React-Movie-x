import  { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { mixins } from '../global/customStyles'
interface contentWrapperProps{
    children:ReactNode
}
const ContentWrapper:FC<contentWrapperProps> = ({children}) => {
  return (
    <Wrapper className='content-wrapper'>{children}</Wrapper>
  )
}
const Wrapper=styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
   
`
export default ContentWrapper