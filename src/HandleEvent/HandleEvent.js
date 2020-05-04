import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showMess = () => {
        alert("k tham số");
    }

    showMessParam = (title) => {
        alert(title);
    }

    render() {
        return (
            <div>
                {/* cách 1: định nghĩa funtion trực tiếp */}
                <button id="btn" onClick={() => {
                    this.showMess()
                }}>Click me !!</button>
                <br/>
                {/* truyền tham số dùng arrow function */}
                <button id="btn" onClick={() => {
                    this.showMessParam("có tham số")
                }}>Click  !!</button>
                <br/>
                {/* cách 2: định nghĩa với call back function */}
                <button onClick={this.showMess}>Show mess</button>
                {/* Truyền tham số dùng callback function */}
                <button ></button>
            </div>
        )
    }
}
