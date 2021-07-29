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
  
const Form = (props) => {

    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
      })
    return (<div  ref={ref} className ={percentage>.25?"visible form-wrapper":"form-wrapper"}>
        
    <form id="form"  name="contact" method="POST"  data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="language" value={props.eng?"EN":"ES"} />
      <label >
    
        <input  type="text" name="firstName" onChange={(e) => checkInputValue(e)}  required='true'/> <span>  <span>{props.eng?"Name":"Nombre"}:</span></span> 
      </label>
      <label >
    
    <input  type="text" name="lastName" onChange={(e) => checkInputValue(e)} required='true' /> <span>  <span>{props.eng?"Last Name":"Apellido"}:</span></span> 
  </label>

      <label  >
     
     <input type="tel" name="phone" onChange={(e) => checkInputValue(e)} required='true'/><span>  <span>{props.eng?"Phone Number":"Telefono"}:</span></span> 
   </label>

      <label  >
     
        <input type="text" name="email" onChange={(e) => checkInputValue(e)} required='true'/><span>  <span>Mail:</span></span> 
      </label>
      <button type="submit"  style={{    width: "200px",
    margin:"auto"}} className="outlined-button light">{props.eng?  "MAKE AN APPOINTMENT":"HACER CITA"}</button>
    </form>
    </div>  );
}
export default Form;