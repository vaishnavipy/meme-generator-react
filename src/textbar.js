import React from "react";

function TextBar(props){
    return(<div>

        <input type="text" value={props.toptext} onChange={props.handleChange} name="toptext" placeholder="Top Text" className="input"/>

        <input type="text" value={props.bottomtext} onChange={props.handleChange} name="bottomtext" placeholder="Bottom Text" className="input"/>

        <button className="button" onClick={props.handleClick}>Gen</button>
    </div>)


}

export default TextBar;