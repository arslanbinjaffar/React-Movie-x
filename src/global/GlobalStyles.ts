import {GlobalStyleComponent, createGlobalStyle} from 'styled-components'








const Global=createGlobalStyle`
*,*::before,*::after{
margin: 0;
padding: 0;
box-sizing: border-box;
}
html{
  font-family: 'Inter', sans-serif;

    font-size: 16px;
    font-synthesis: none;
    line-height: 1;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 
}
:root{
    --black: #04152d;
    --black2: #041226;
    --black3: #020c1b;
    --black-lighter: #1c4b91;
    --black-light: #173d77;
    --pink: #da2f68;
    --orange: #f89e00;
    --gradient: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
}
body{
    overflow-x:hidden ;
    background-color: rgb(53,56,57);
}
::-webkit-scrollbar {
    display: none;
}
.skeleton {
    position: relative;
    overflow: hidden;
    background-color: #0a2955;
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
            90deg,
            rgba(#193763, 0) 0,
            rgba(#193763, 0.2) 20%,
            rgba(#193763, 0.5) 60%,
            rgba(#193763, 0)
        );
        animation: shimmer 2s infinite;
        content: "";
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
}
.skeleton {
    position: relative;
    overflow: hidden;
    background-color: #0a2955;
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
            90deg,
            rgba(#193763, 0) 0,
            rgba(#193763, 0.2) 20%,
            rgba(#193763, 0.5) 60%,
            rgba(#193763, 0)
        );
        animation: shimmer 2s infinite;
        content: "";
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
}
`
export default Global;