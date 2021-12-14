import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";
import PhaseThree from "./PhaseThree"; 






class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            wordcount:"",
            text:"",
            intervals:"",
            timer:0
       }
        this.handletheClback=this.handletheClback.bind(this);
        this.handletheClback2=this.handletheClback2.bind(this);
        this.callback=this.callback.bind(this);
        this.callback2=this.callback2.bind(this);
    }

    handletheClback=(cD)=>{
        this.setState({wordcount:cD})
        
    }


    handletheClback2=(cD)=>{
        this.setState({text:cD})
    }


    
    componentDidMount(){
        setTimeout(this.callback,0)
    }
    callback2(){
        setTimeout(this.callback,0)
    }
    callback=()=>{
        this.props.prtC(this.state.text)
        this.props.prtC2(this.state.wordcount)
        this.props.prtC3(this.state.close)
        this.props.prtC4(this.state.timer)

    }


    render(){
        
        return(
            <HashRouter>
                <div>
                    <h1>Hello and Welcome to this 3 Phase Typing Tutor! This typing test is to test your speed and 
                          helps improve upon that speed, if needed. Please refresh the page to restart your time.</h1>
                          <h2>Type the words shown in the paragraph below (excluding the title), into the light blue box below the paragraph:</h2>
                          <h3><a href="https://www.gutenberg.org/cache/epub/3238/pg3238-images.html#page1">Poems of Cheer by Ella Wheeler Wilcox</a></h3>
                    <ul className="header">
                        <li><NavLink exact to="/" onClick={this.callback2}>Phase One</NavLink></li>
                        <li><NavLink to="/phasetwo" onClick={this.callback2}>Phase Two</NavLink></li>
                        <li><NavLink to="/phasethree" onClick={this.callback2}>Phase Three</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/"><PhaseOne prtCback={this.handletheClback} prtCback2={this.handletheClback2}/></Route>
                        <Route path="/phasetwo"><PhaseTwo prtCback={this.handletheClback} prtCback2={this.handletheClback2}/></Route>
                        <Route path="/phasethree"><PhaseThree prtCback={this.handletheClback} prtCback2={this.handletheClback2}/></Route>
                        
                    </div>
                </div>
                <p className="infoSource">Info Source: <a href="http://www.gutenberg.org/">Project Gutenberg</a></p>
            </HashRouter>
        );
    }
}

export default Main;
