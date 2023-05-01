import styled, {  FlattenInterpolation, ThemeProps, css } from "styled-components";

export const MOBILEBREAKPOINTS={
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  XXL: '1536px'
}

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bg?: string;
    color?: string;
  }


  export const mixins = {
    sm: () => `
      @media only screen and (min-width: 640px) {
        @content;
      }
    `,
    md: () => `
      @media only screen and (min-width: 768px) {
        @content;
      }
    `,
    lg: () => `
      @media only screen and (min-width: 1024px) {
        @content;
      }
    `,
    xl: () => `
      @media only screen and (min-width: 1280px) {
        @content;
      }
    `,
    xxl: () => `
      @media only screen and (min-width: 1536px) {
        @content;
      }
    `,
    ellipsis: (line = 2) => `
      display: -webkit-box;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
  };
export const CustomButton=styled.button<CustomButtonProps>`
background-color: ${({bg})=>bg||"#fff"};
color: ${({color})=>color||"#000"};
box-shadow: 5px 5px 4px rgba(0,0,0,.4);
border: none;
outline: none;
transition: all 0.4s;
font-size: 20px;
font-weight: 500;
cursor: pointer;
transition: all 0.4s;
&:invalid{
    color: rgba(105,0,0);
}
&:focus{
    
}
&:hover{

}
&:active{

}
`
