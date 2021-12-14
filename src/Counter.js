import React, { Component } from "react";
import Main from "./Main";


class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            textarea: "",
            timer:0,
            intervals:0,
            text:"",
            wordcount:"",
            displaytext:"Sorry but your typing doesn't currently match the above paragraph!",
            fired:false,
            wordperminute:"",
            close:false
        }

        this.startCounter=this.startCounter.bind(this);
        this.timerTick=this.timerTick.bind(this);
        this.updateInput=this.updateInput.bind(this);
    }
    startCounter(e){
        if (this.state.textarea===this.state.text){
            this.calculateWordsPerMin();
            this.setState({
                displaytext:"Awesomeness! You have entered the exact information in the paragraph!",
                fired:false,
                close:true
            })
            clearInterval(this.intervals);
            
        } else if (this.state.textarea!==this.state.text){
            this.setState({
                displaytext:"Sorry but your typing doesn't currently match the above paragraph!"
            })
        }

        this.updateInput(e);

        if (this.state.fired===false){
            console.log("timer")
                this.intervals=setInterval(this.timerTick, 100)
            this.setState({fired:true});
        } 
    }
    updateInput(){
            this.setState({
                textarea:this._input.value
            });
    }

    componentDidUpdate(){
        if (this.state.timer===0){
            this.props.decreaseCount();
        }
    }

    wpm="";
    calculateWordsPerMin(){
        this.wpm="";
        this.wpm=this.state.timer/60;
        this.wpm=this.state.wordcount/this.wpm;
        this.wpm=Math.round(this.wpm*100)/100;
        this.setState({
            wordperminute:this.wpm
        });
    }


    timerTick(){
        this.setState({
            timer:this.state.timer+.1,
        });
        this.props.increaseCount();
    }

    handletheCl=(cD)=>{
        this.setState({
            text:cD.substring(0,cD.length-1),
            textarea: "",
            timer:0,
            intervals:0,
            displaytext:"Sorry but your typing doesn't currently match the above paragraph!",
            fired:false,
            wordperminute:""
        })
    }

    handletheCl2=(cD)=>{
        this.setState({wordcount:cD})
    }
    handletheCl3=(cD)=>{
        this.setState({close:cD})
    }
    handletheCl4=(cD)=>{
        this.setState({timer:cD})
    }


    render(){
        var self=this;
        return(
            <div className="countUp">
                <Main prtC={this.handletheCl} prtC2={this.handletheCl2} prtC3={this.handletheCl3} prtC4={this.handletheCl4}/>
                <textarea className="input" readOnly={this.state.close} rows="15" cols="100" onChange={this.startCounter} value={this.state.textarea}
                ref={
                    function(el){
                        self._input = el;
                    }
                }></textarea>
                <div className="timer">
                <p>Timer: <b>{this.props.countValue}</b></p>
                <p><b>{this.state.displaytext}</b></p>
                <p>Your Words Per Minute: <b>{this.state.wordperminute}</b></p>
                </div>
            </div>
        );
    }
}

export default Counter;
