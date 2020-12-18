import React from 'react'



import scroll from "../img/scroll.svg"




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
        visible:window.scrollY===0?true:false
    },()=>{ console.log(this.state.visible,window.scrollY)})
}

    render() {

        return (
            <>

         <img className={"scrolldown "+(this.state.visible?"fade":"")}src={scroll}/>
         </>)
    }



}

export default Scroll