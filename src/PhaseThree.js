import React, { Component } from "react";

class PhaseThree extends Component{
    constructor(props){
        super(props);

        this.state={
            wordcount:158,
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
    text="I look down the lengthening distance Far back to youth’s valley of hope. How strange seemed the ways of existence, How infinite life and its scope! What dreams, what ambitions came thronging To people a world of my own! How the heart in my bosom was longing, For pleasures and places unknown. But the hill-tops of pleasure and beauty Were covered with mist at the dawn; And only the rugged road Duty Shone clear, as my feet wandered on. I loved not the path and its leading, I hated the rocks and the dust; But a Voice from the Silence was pleading, It spoke but one syllable—“Trust.” saw, as the morning grew older, The fair flowered hills of delight; And the feet of my comrades grew bolder, They hurried away from my sight. And when on the pathway I faltered, And when I rebelled at my fate, The Voice with assurance unaltered, Again spoke one syllable—'Wait.'"
    render(){
        return(
            <div>
                <h1>Typing Tutor Phase Three</h1>
                <h2>How many of the 158 words can you type per minute?</h2>
                <h3>RETROSPECTION</h3>
                <p className="testCompare">{this.text}</p>
                
            </div>
        );
    }
}

export default PhaseThree;
