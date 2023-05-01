import styled from "styled-components";




const Wrapper=styled.header`
  position: relative;
  height: 60px;
.nav-bar{
position: fixed;
transform: translateY(0);
transition: all 0.4s;
display:flexbox;
display:flex;
justify-content:space-between;
align-items:center ;
width: 100%;
padding:0 10px;
color:#fff ;
@media (max-width:785px) {
  .nav-list{
    display: none;

  }
  }
}

.top{
background-color: rgba(0,0,0,0.25);
-webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.show{
background-color: #000;
}
.hide{
  transform: translateY(-60px);
}

.logo{
  img{
    display:block;
    width:100%;
    height:100%;
    object-fit:contain;
    cursor: pointer;
    transition:all 0.4s ;
    &:hover{
      object-fit:cover ;
    }
    &:active{
      padding:10px ;
    }
  }
}
.nav-list{
  list-style:none ;
  display:flex;
  align-items:center;
  gap:20px;
  font-size:20px;
  font-weight: 700;
  text-transform:capitalize;

  .nav-item{
      display:inline-block;
      padding:7px;
      border-radius:5px;
      cursor: pointer;
      background-color:transparent;
      transition:all 0.4s;
      &:hover{
        filter:saturate(50%) ;
        background-color:#020024;
      }
      &:focus,&:active{
        padding:10px;
        background-color:#020024;
        filter:saturate(50%) ;
      }
  }
}

.mobile-nav{
  display: none;
  justify-content: space-between;
  align-items: center;
  padding:0 10px;
  background-color: rgba(0,0,0,0.25);
  @media (max-width:786px) {
    display: flex;  z-index: 9999;
    .nav-list{
      display: flex;
      position: absolute;
    
    top: 100%;
    right: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.9);
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    .nav-item{
      display:inline-block;
      padding:7px;
      border-radius:5px;
      cursor: pointer;
      background-color:transparent;
      transition:all 0.4s;
      &:hover{
        filter:saturate(50%) ;
        background-color:#020024;
      }
      &:focus,&:active{
        padding:10px;
        background-color:#020024;
        filter:saturate(50%) ;
      }
  }
    }
  }  
  }
  





  
  .mobile-menu-item{
    display:none;
    align-items:center;
    gap:30px;
    color: white;
    cursor: pointer;
    @media (max-width:786px) {
      display: flex;
    }
  }

  .search-bar{
    top: 9%;
    top: 100%;
    left: 0%;
    position: absolute;
    width: 100%;
    height: 50px;
    z-index:9999;
    &.top{
      animation: Down 0.5s  ease-in;
    }
    .input-container{
      display: flex;
      align-items: center;
      height: 100%;
      background-color: #fff;
      padding: 10px;
    input{
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      font-size: 18px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .close-btn{
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.4s;
      &:hover{
      color: red;
      }
    }
  }
  @keyframes Down {
    0%{
      opacity: 0.5;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  }
`
export default Wrapper;