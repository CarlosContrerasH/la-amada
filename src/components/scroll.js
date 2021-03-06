import React from 'react'

 



class Scroll extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
 
        }


    }


 componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
 }

componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
}


handleScroll=()=>{
  
   this.setState({
        visible:window.scrollY==0?false:true
    })
}

    render() {

        return (
            <>

        

         <div className={"scrolldown "+(this.state.visible?"fade ":"")}>

 
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 148.2 230.7" enableBackground="new 0 0 148.2 230.7" >
<path fill="#4A7871" d="M74.9,191.2c-31.4,0-56.9-25.5-56.9-56.9V71.7c0-31.4,25.5-56.9,56.9-56.9s56.9,25.5,56.9,56.9v62.6
	C131.8,165.7,106.3,191.2,74.9,191.2z M74.9,17.8C45.2,17.8,21,42,21,71.7v62.6c0,29.7,24.2,53.9,53.9,53.9s53.9-24.2,53.9-53.9
	V71.7C128.8,42,104.6,17.8,74.9,17.8z"/>
<g>
	<path fill="#4A7871" d="M35,89.2c0.2,0.5,0.6,0.9,1,1.2c0.4,0.3,0.9,0.5,1.5,0.6c0.6,0.1,1.2,0.2,1.8,0.2c0.4,0,0.8-0.1,1.2-0.2
		s0.8-0.3,1.2-0.5c0.4-0.2,0.7-0.5,0.9-0.9c0.2-0.4,0.4-0.8,0.4-1.3c0-0.4-0.1-0.7-0.3-1s-0.4-0.5-0.7-0.7s-0.6-0.4-0.9-0.5
		c-0.3-0.1-0.7-0.2-1-0.3L37,85c-0.4-0.1-0.8-0.2-1.2-0.4s-0.7-0.4-1-0.6c-0.3-0.3-0.5-0.6-0.7-1s-0.3-0.8-0.3-1.4
		c0-0.3,0.1-0.7,0.2-1.2c0.1-0.5,0.4-0.9,0.7-1.3c0.4-0.4,0.9-0.8,1.5-1c0.6-0.3,1.4-0.4,2.4-0.4c0.7,0,1.4,0.1,2,0.3
		s1.2,0.5,1.6,0.8c0.5,0.4,0.8,0.8,1.1,1.4c0.3,0.5,0.4,1.2,0.4,1.9h-1.3c0-0.5-0.1-1-0.4-1.4c-0.2-0.4-0.5-0.7-0.8-1
		c-0.3-0.3-0.7-0.5-1.2-0.6s-0.9-0.2-1.4-0.2c-0.5,0-0.9,0-1.3,0.1c-0.4,0.1-0.8,0.3-1.1,0.5c-0.3,0.2-0.6,0.5-0.8,0.9
		s-0.3,0.8-0.3,1.3c0,0.3,0.1,0.6,0.2,0.9c0.1,0.2,0.3,0.4,0.5,0.6c0.2,0.2,0.4,0.3,0.7,0.4s0.5,0.2,0.8,0.3l3.4,0.8
		c0.5,0.1,1,0.3,1.4,0.5c0.4,0.2,0.8,0.4,1.2,0.7s0.6,0.6,0.8,1s0.3,0.9,0.3,1.5c0,0.2,0,0.4,0,0.6s-0.1,0.5-0.2,0.8
		c-0.1,0.3-0.3,0.6-0.5,0.9c-0.2,0.3-0.5,0.6-0.9,0.8s-0.9,0.4-1.5,0.6s-1.3,0.2-2.1,0.2c-0.8,0-1.6-0.1-2.3-0.3
		c-0.7-0.2-1.3-0.5-1.8-0.9c-0.5-0.4-0.9-0.9-1.1-1.5c-0.3-0.6-0.4-1.4-0.3-2.2h1.3C34.7,88.1,34.8,88.7,35,89.2z"/>
	<path fill="#4A7871" d="M58.1,80.8c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.5-1.3-0.7s-1-0.2-1.5-0.2c-0.9,0-1.7,0.2-2.4,0.5
		c-0.7,0.4-1.2,0.8-1.6,1.4c-0.4,0.6-0.7,1.2-0.9,2c-0.2,0.7-0.3,1.5-0.3,2.3c0,0.8,0.1,1.5,0.3,2.2c0.2,0.7,0.5,1.4,0.9,2
		c0.4,0.6,1,1.1,1.6,1.4c0.7,0.4,1.5,0.5,2.4,0.5c0.7,0,1.2-0.1,1.8-0.4c0.5-0.2,1-0.6,1.4-1c0.4-0.4,0.7-0.9,0.9-1.4
		c0.2-0.5,0.4-1.1,0.5-1.8h1.3c-0.1,0.9-0.3,1.6-0.6,2.3c-0.3,0.7-0.7,1.3-1.2,1.8s-1.1,0.9-1.8,1.1c-0.7,0.3-1.4,0.4-2.2,0.4
		c-1.1,0-2.1-0.2-2.9-0.6c-0.8-0.4-1.5-0.9-2.1-1.6c-0.6-0.7-1-1.4-1.2-2.3c-0.3-0.9-0.4-1.8-0.4-2.8c0-1,0.1-1.9,0.4-2.8
		c0.3-0.9,0.7-1.7,1.2-2.3c0.5-0.7,1.2-1.2,2.1-1.6c0.8-0.4,1.8-0.6,2.9-0.6c0.7,0,1.3,0.1,2,0.3c0.6,0.2,1.2,0.5,1.7,0.9
		c0.5,0.4,0.9,0.9,1.3,1.4c0.3,0.6,0.6,1.2,0.7,1.9h-1.3C58.5,81.7,58.3,81.2,58.1,80.8z"/>
	<path fill="#4A7871" d="M70.6,78c0.6,0,1.1,0.1,1.6,0.2c0.5,0.1,1,0.4,1.4,0.7s0.7,0.7,0.9,1.1c0.2,0.5,0.3,1,0.3,1.6
		c0,0.9-0.2,1.7-0.7,2.3c-0.5,0.7-1.1,1.1-2,1.3v0c0.5,0.1,0.8,0.2,1.1,0.4s0.5,0.4,0.7,0.7c0.2,0.3,0.3,0.6,0.4,1
		c0.1,0.4,0.1,0.8,0.2,1.2c0,0.2,0,0.5,0,0.9c0,0.3,0,0.7,0.1,1c0,0.3,0.1,0.7,0.2,1c0.1,0.3,0.2,0.5,0.3,0.7h-1.5
		c-0.1-0.1-0.1-0.3-0.2-0.5c0-0.2-0.1-0.4-0.1-0.6c0-0.2,0-0.4,0-0.6c0-0.2,0-0.4,0-0.5c0-0.5-0.1-1-0.1-1.5
		c-0.1-0.5-0.2-0.9-0.4-1.3c-0.2-0.4-0.5-0.7-0.8-0.9c-0.4-0.2-0.9-0.3-1.5-0.3h-5.1V92h-1.3V78H70.6z M70.5,84.6
		c0.4,0,0.8-0.1,1.2-0.2c0.4-0.1,0.7-0.3,1-0.5s0.5-0.5,0.7-0.9s0.2-0.7,0.2-1.1c0-0.9-0.2-1.5-0.7-2c-0.5-0.5-1.3-0.7-2.3-0.7h-5
		v5.5H70.5z"/>
	<path fill="#4A7871" d="M78.9,82.2c0.3-0.9,0.7-1.7,1.2-2.3s1.2-1.2,2.1-1.6s1.8-0.6,2.9-0.6s2.1,0.2,2.9,0.6
		c0.8,0.4,1.5,0.9,2.1,1.6c0.5,0.7,1,1.5,1.2,2.3c0.3,0.9,0.4,1.8,0.4,2.8c0,1-0.1,1.9-0.4,2.8c-0.3,0.9-0.7,1.7-1.2,2.3
		c-0.6,0.7-1.2,1.2-2.1,1.6c-0.8,0.4-1.8,0.6-2.9,0.6s-2.1-0.2-2.9-0.6s-1.5-0.9-2.1-1.6c-0.6-0.7-1-1.4-1.2-2.3
		c-0.3-0.9-0.4-1.8-0.4-2.8C78.5,84,78.6,83.1,78.9,82.2z M80.2,87.2c0.2,0.7,0.5,1.4,0.9,2c0.4,0.6,1,1.1,1.6,1.4s1.5,0.5,2.4,0.5
		s1.7-0.2,2.4-0.5c0.7-0.4,1.2-0.8,1.6-1.4s0.7-1.2,0.9-2c0.2-0.7,0.3-1.5,0.3-2.2c0-0.8-0.1-1.5-0.3-2.3c-0.2-0.7-0.5-1.4-0.9-2
		s-1-1.1-1.6-1.4c-0.7-0.4-1.5-0.5-2.4-0.5s-1.7,0.2-2.4,0.5s-1.2,0.8-1.6,1.4c-0.4,0.6-0.7,1.2-0.9,2s-0.3,1.5-0.3,2.3
		C79.8,85.8,79.9,86.5,80.2,87.2z"/>
	<path fill="#4A7871" d="M97.1,78v12.9h7.9V92h-9.2V78H97.1z"/>
	<path fill="#4A7871" d="M109.6,78v12.9h7.9V92h-9.2V78H109.6z"/>
	<path fill="#4A7871" d="M68.6,101.6v1.1h-4.9v12.9h-1.3v-12.9h-4.9v-1.1H68.6z"/>
	<path fill="#4A7871" d="M71.6,105.8c0.3-0.9,0.7-1.7,1.2-2.3c0.5-0.7,1.2-1.2,2.1-1.6c0.8-0.4,1.8-0.6,2.9-0.6s2.1,0.2,2.9,0.6
		c0.8,0.4,1.5,0.9,2.1,1.6c0.5,0.7,1,1.5,1.2,2.3c0.3,0.9,0.4,1.8,0.4,2.8c0,1-0.1,1.9-0.4,2.8c-0.3,0.9-0.7,1.7-1.2,2.3
		c-0.6,0.7-1.2,1.2-2.1,1.6c-0.8,0.4-1.8,0.6-2.9,0.6s-2.1-0.2-2.9-0.6c-0.8-0.4-1.5-0.9-2.1-1.6c-0.6-0.7-1-1.4-1.2-2.3
		c-0.3-0.9-0.4-1.8-0.4-2.8C71.2,107.6,71.3,106.7,71.6,105.8z M72.8,110.8c0.2,0.7,0.5,1.4,0.9,2c0.4,0.6,1,1.1,1.6,1.4
		c0.7,0.4,1.5,0.5,2.4,0.5s1.7-0.2,2.4-0.5s1.2-0.8,1.6-1.4s0.7-1.2,0.9-2c0.2-0.7,0.3-1.5,0.3-2.2c0-0.8-0.1-1.5-0.3-2.3
		c-0.2-0.7-0.5-1.4-0.9-2s-1-1.1-1.6-1.4s-1.5-0.5-2.4-0.5s-1.7,0.2-2.4,0.5c-0.7,0.4-1.2,0.8-1.6,1.4c-0.4,0.6-0.7,1.2-0.9,2
		c-0.2,0.7-0.3,1.5-0.3,2.3C72.5,109.3,72.6,110.1,72.8,110.8z"/>
	<path fill="#4A7871" d="M50.7,125.1l4.6,12.6h0l4.5-12.6h1.4l-5.2,14h-1.6l-5.2-14H50.7z"/>
	<path fill="#4A7871" d="M65.8,125.1v14h-1.3v-14H65.8z"/>
	<path fill="#4A7871" d="M80.4,125.1v1.1H72v5.1h7.8v1.1H72v5.5h8.4v1.1h-9.8v-14H80.4z"/>
	<path fill="#4A7871" d="M84.3,125.1l3.2,12.3h0l3.4-12.3h1.7l3.4,12.3h0l3.2-12.3h1.3l-3.9,14h-1.4l-3.6-12.6h0l-3.5,12.6h-1.5
		l-3.9-14H84.3z"/>
</g>
<rect x="72.3" y="171.8" fill="#4A7871" width="3" height="44.6"/>
</svg>


         </div>
         </>)
    }



}

export default Scroll