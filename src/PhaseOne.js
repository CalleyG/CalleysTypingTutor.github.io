import React, { Component } from "react";

class PhaseOne extends Component{
    constructor(props){
        super(props);

        this.state={
            wordcount:68,
            text:this.text
        }
        
    }

    onTrigger=()=>{
        this.props.prtCback(this.state.wordcount)
        this.props.prtCback2(this.state.text)
    }

    componentDidMount(){
        this.onTrigger()
    }

    text="Prayer has a sweet, refining grace. It educates the soul and heart. It lends a luster to the face, and by its elevating art, it gives the mind an inner sight that brings it near the infinite. From our gross selves it helps us rise to something which we yet may be. And so I ask not to be wise, if thus my faith is lost to me."

    render(){
        return(
            <div>
                <h1>Typing Tutor Phase One</h1>
                <h2>How many of the 68 words below can you type per minute?</h2>
                <h3>PRAYER</h3>
                <p id="testCompare">{this.text}</p>
            </div>
        );
    }
}

export default PhaseOne;
