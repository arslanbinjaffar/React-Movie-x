import { KeyboardEventHandler, useState, useEffect } from 'react';
import styled from 'styled-components'
import movielogo from '../../assets/movix-logo.svg'
import {AiOutlineSearch} from 'react-icons/ai'
import {SlMenu} from 'react-icons/sl'
import {VscChromeClose} from 'react-icons/vsc'
import {useNavigate,useLocation, Link} from 'react-router-dom'
import Wrapper from './style';

const Header = () => {
  const [show,setShow]=useState("")
  const [mobileMenu,setMobileMenu]=useState<boolean |null>(false)
  const [lastScrollyY,setLastScrollyY]=useState(0)
  const [query,setQuery]=useState("")
  const [search,setSearch]=useState<boolean |null>(false)
  const Navigate=useNavigate()
  const location=useLocation()
  const handleSearchQuery:KeyboardEventHandler<HTMLInputElement>=(e)=>{
    if(e.key ==="Enter" && query.length>0){
      Navigate(`/search/${query}`);
      setTimeout(() => {
        setSearch(false)
      }, 1000);
    }
};
const handleType=(type:string)=>{
   if(type==='movie'){
    Navigate("/explore/movie")
   }
   else{
    Navigate(`/explore/tv`)
   }
}
const openSearch=()=>{
setSearch(true)
setMobileMenu(false)
}
const openMenuBar=()=>{
  setSearch(false)
  setMobileMenu(true)
  }
  const handleScroll=()=>{
    
    if(window.scrollY>200){
      if(window.scrollY > lastScrollyY && !mobileMenu){
          setShow("hide")
      }
      else{
        setShow("show")
      }
    }
    else{
      setShow("top")
    }
    setLastScrollyY(scrollY)
    
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      removeEventListener('scroll',handleScroll)
    }
  },[])
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <Wrapper>
    <nav className={`nav-bar ${mobileMenu ? "mobile-nav":"nav-bar"} ${show}`}>
        <Link to={"/"} className="logo">
            <img src={movielogo} alt="movie logo" />
        </Link>
        <ul className='nav-list'>
            <li className='nav-item' onClick={()=>{
              handleType("movie")
              setMobileMenu(false)
            }
              }>movies</li>
            <li className='nav-item' onClick={()=>{
              handleType("tv")
              setMobileMenu(false)}}>tv shows</li>
            <li className='nav-item' onClick={()=>setMobileMenu(false)}>
              <AiOutlineSearch size={30} onClick={openSearch}/>
            </li>
        </ul>
        <div className='mobile-menu-item'>
          <AiOutlineSearch size={30} onClick={openSearch}/>
          {mobileMenu?(
            <>
          <VscChromeClose size={30} onClick={()=>setMobileMenu(false)}/>
            </>
          ):(<>
          <SlMenu size={30} onClick={openMenuBar}/>
          </>)}

        </div>
    </nav>
   {search && <div className={`${search?"search-bar top":"search-bar"}`}>
    <div className='input-container'>
            <input type="search" title='enter pressed' value={query} 
            placeholder='enter your movie search'
            onChange={(e)=>setQuery(e.target.value)} onKeyDown={handleSearchQuery} />
            <VscChromeClose size={30} onClick={()=>setSearch(false)} className='close-btn'/>
            </div>
    </div>}
    </Wrapper>
  )
}

export default Header