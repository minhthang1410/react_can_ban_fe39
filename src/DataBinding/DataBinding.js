import React, { Component } from 'react'

export default class DataBinding extends Component {
    title = 'cybersoft';

    renderTitle = () => {
        return <h1>{this.title}</h1>
    }

    render() {
        const hocVien = { ma: 1, ten: 'ng van a' };
        const renderImg = () => {
            return <img src="https://hoatuoinhuy.vn/wp-content/uploads/2019/08/bo-hoa-hong-99-bong-2.jpg" />
        }

        return (
            <div>
                <p id="txt">{this.title}</p>
                {this.renderTitle()}
                <ul>
                    <li>Mã: {hocVien.ma}</li>
                    <li>Tên: {hocVien.ten}</li>
                </ul>
                <div className="container">
                    {renderImg()}
                </div>
            </div>
        )
    }
}
