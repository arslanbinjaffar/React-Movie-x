/** @format */

import styled from "styled-components";
import { MOBILEBREAKPOINTS } from "../../../global/customStyles";

const Wrapper = styled.div`
    overflow-x:hidden ;
  display: grid;
  place-content: center;
  min-height: fit-content;
  position: relative;
  height: 100vh;
  margin-bottom: 20px;
  @media (min-width: ${MOBILEBREAKPOINTS.MD}) {
    height:700px;
    margin-bottom: 40px;
  }

  .backdrop-img {
    width: 100%;
    height: 100%;
    position: absolute;
    img{
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: block;
    }
    top: 0;
    left: 0;
    opacity: 0.5;
    overflow: hidden;
    .lazy-load-image-background {
      width: 100%;
      height: 100%;
      /* img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      } */
    }
    .opacity-layer {
      width: 100%;
      height: 250px;
      background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .hero-content {
    position: relative;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ffff;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    .title {
      font-size: 50px;
      font-weight: 600;
      margin-bottom: 20px;
      @media (min-width: ${MOBILEBREAKPOINTS.MD}) {
        margin-bottom: 0;
        font-size: 90px;
      }
    }
    .sub-title {
      font-size: 18px;
      margin-bottom: 10px;
      @media (min-width: ${MOBILEBREAKPOINTS.MD}) {
        font-size: 24px;
      }
    }
  }
  .input-container {
    z-index: 9999;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    width: 100%;
    margin: 0 auto;
    margin-top:20px;
    input {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-radius: 30px 0 0 30px;
      font-size: 14px;
      font-weight: normal;
      text-transform: capitalize;
      width: calc(100% - 100px);
      border: none;
      outline: none;
      height: 50px;
      padding: 0px 15px;
      @media (min-width: ${MOBILEBREAKPOINTS.MD}) {
        height: 60px;
        width: calc(100% - 150px);
        font-size: 20px;
        padding: 0 30px;
      }
    }
    button {
      border: none;
      outline: none;
      border-radius: 0px 30px 30px 0px;
      width: 100px;
      height: 50px;
      background: var(--gradient);
      cursor: pointer;
      color: #fff;
      text-transform:capitalize;
      font-size: 16px;
      font-weight:bold;
      @media (min-width: ${MOBILEBREAKPOINTS.MD}) {
        height: 60px;
        width: 150px;
        font-size: 18px;
        font-weight:bold;
      }
    }
  }
`;
export default Wrapper;
