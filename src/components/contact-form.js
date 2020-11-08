import React from 'react';
import { useScrollPercentage } from 'react-scroll-percentage'





function checkInputValue(e){
    console.log(e.target.value.length)
  if(e.target.value.length!==0){
    e.target.classList="filled"
  }
  else{
    e.target.classList=""
  }
  
  }
  
const Form = () => {

    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
      })
    return (<div  ref={ref} className ={percentage>.25?"visible form-wrapper":"form-wrapper"}>
        
    <form>
      <label >
    
        <input  type="text" name="name" onChange={(e) => checkInputValue(e)}  /> <span>  <span>Nombre:</span></span> 
      </label>

      <label  >
     
     <input type="tel" name="phone" onChange={(e) => checkInputValue(e)} /><span>  <span>Telefono:</span></span> 
   </label>

      <label  >
     
        <input type="text" name="mail" onChange={(e) => checkInputValue(e)} /><span>  <span>Mail:</span></span> 
      </label>
      <input type="submit" value="Hacer Cita" className="outlined-button light"/>
    </form>
    </div>  );
}
export default Form;