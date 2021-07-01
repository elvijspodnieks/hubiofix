import React, {Component} from "react";



class Timer extends Component{
    state={
        date:new Date(),
        curTime : new Date().toLocaleString(),
    };

    callMe(){
        setInterval(()=>{
            this.setState({date: new Date()});
        }, 1000);
    }
    render(){
        return(
            <div className="App">
                
                <h2 className="clock">{this.state.date.toLocaleTimeString()}</h2>
                {this.callMe()}
                
            </div>

            
        );
    }
}

export default Timer;