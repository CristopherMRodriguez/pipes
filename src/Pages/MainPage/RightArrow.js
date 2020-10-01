import React from 'react';
import IconCarouselRightArrow from "../../Assets/IconCarouselRightArrow.svg";


function RightArrow(){
  return(
    <button style={{position: "absolute", right: "20px", bottom: "5px"}}>
      <img alt="Right Arrow" src={IconCarouselRightArrow}/>
    </button>  
  )
}

export default RightArrow;