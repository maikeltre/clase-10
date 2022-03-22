import React from "react";
import './clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            day: true
        };
        console.log("constructor called!");
    }

    componentDidMount() {
        console.log('componentDidMount called')
        this.timerId = setInterval(() => {
            this.tick()
         }, 1000)
    }
    render() {
        return (
            <div className={ `clock ${!this.state.day? 'night': ''}` }>
                <h1>Hellos World!</h1>
                <h2>It´s {this.state.date.toLocaleTimeString()}⏰ </h2>
            </div>
        )   
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidUpdate() {
        console.log('componentDiuldate called!');
        if (this.state.day) {
            console.log("'Good morning!")
        } else {
            console.log("good night!")
        }
    }

    comoponentDidUnpunt() {
        console.log('componentQWilonount called!');
        clearInterval(this.timerId)
    }
    
}




export default Clock; 