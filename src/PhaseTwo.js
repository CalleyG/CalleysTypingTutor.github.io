import React, { Component } from "react";

class PhaseTwo extends Component{
    constructor(props){
        super(props);

        this.state={
            wordcount:114,
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
    text="In a land beyond sight or conceiving, In a land where no blight is, no wrong, No darkness, no graves, and no grieving, There lies the great ocean of song. And its waves, oh, its waves unbeholden By any save gods, and their kind, Are not blue, are not green, but are golden, Like moonlight and sunlight combined. It was whispered to me that their waters Were made from the gathered-up tears That were wept by the sons and the daughters Of long-vanished eras and spheres. Like white sands of heaven the spray is That falls all the happy day long, And whoever it touches straightway is Made glad with the spirit of song."

    render(){
        return(
            <div>
                <h1>Typing Tutor Phase Two</h1>
                <h2>How many of the 114 words can you type per minute?</h2>
                <h3>THE OCEAN OF SONG</h3>
                <p className="testCompare">{this.text}</p>
                
            </div>
        );
    }
}

export default PhaseTwo;
