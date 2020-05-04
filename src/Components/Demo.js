import React, { Component } from 'react'

export default class Demo extends Component {
    //Các phương thức khác ...
    //Các thuộc tính khác
    
    //Phương thức render chứa nội dung giao diện component
    render() {
        return (
            <div>
                <h3>demo thẻ class component</h3>
                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
            </div>
        )
    }
}
