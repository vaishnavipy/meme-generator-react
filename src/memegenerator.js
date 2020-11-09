import React,{Component} from "react";
import TextBar from "./textbar";
import RandomImages from "./randomimages";

class MemeGenerator extends React.Component{

    state={
        toptext:"",
        bottomtext:"",
        images:""

    }

    handleChange=(event)=>{
        const {name,value} = event.target;

        this.setState({
        [name]:value
        })


    }

    handleClick=()=>{
        let randomIndex;

        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            randomIndex = Math.floor(Math.random()*data.data.memes.length)
            this.setState({images:data.data.memes[randomIndex].url})


        })


    }

    componentDidMount(){
        
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            this.setState({images:data.data.memes[0].url})
        })

    }



    render(){
        return(<div className="meme-main-container">
            
            <TextBar 
            toptext={this.state.toptext} 
            
            bottomtext={this.state.bottomtext} 
            
            handleChange={this.handleChange}  
            
            handleClick ={this.handleClick}
            />
            
            <RandomImages images={this.state.images} toptext={this.state.toptext} bottomtext={this.state.bottomtext}/>

        </div>)
    }


}

export default MemeGenerator;