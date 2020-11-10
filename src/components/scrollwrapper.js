import React from 'react';
import { useScrollPercentage } from 'react-scroll-percentage'




const ScrollWrapper = (props) => {

  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  })
  return (<div ref={ref} className={percentage > .35 ? "visible component " + (props.classes ? props.classes : "") +(percentage>.25&&percentage<.75?" in-screen":""): "component " + (props.classes ? props.classes : "")}>
    {console.log(percentage, props)}
    {props.children}
  </div>);
}
export default ScrollWrapper;