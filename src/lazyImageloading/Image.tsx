import React, { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { MyImageComponentProps } from '../types/types';

const Img:FC<MyImageComponentProps> = ({src,className}) => {
return(
  <LazyLoadImage
  className={className || ""}
  effect="blur"
  src={src} />
  
  )
}



export default Img;