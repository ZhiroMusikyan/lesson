// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Button from "./components/Button";

class App extends React.Component {
    state = {
        Result: 0,
    };
    incrementFun = () =>{
        this.setState({
            Result: this.state.Result +1,
        })
    };

    constructor() {
        super();
        this.decrementFun = this.decrementFun.bind(this);
    }
    decrementFun() {
        this.setState({
            Result: this.state.Result -1,
        })
    };




    render() {
        return(
            <div>
                <Button OnClick = {this.incrementFun} Name = {`Increment`}/>
                <span>{this.state.Result}</span>
                <Button OnClick = {this.decrementFun} Name = {`Decrement`}/>
            </div>
        )
    }
}

export default App