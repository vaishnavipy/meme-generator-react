import React,{Componnet} from "react";


function RandomImages(props){
    return(<div className="image-outer-container">

   
  
  
      <img src={props.images}  className="image"/>
      <h2 className="toptext">{props.toptext.toUpperCase()}</h2>  
      
      <h2 className="bottomtext">{props.bottomtext.toUpperCase()}</h2> 
       
    
    </div>)
} 

export default RandomImages;