import React from 'react';
import { useScrollPercentage } from 'react-scroll-percentage'



 
const ScrollWrapper = (props) => {

    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
      })
    return (<div  ref={ref} className ={percentage>.25?"visible component "+ (props.classes?props.classes:""):"component "+  (props.classes?props.classes:"")}>
      
  {props.children}
    </div>  );
}
export default ScrollWrapper;