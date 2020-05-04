import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'
import ProductList from './ProductList'
import Promotion from './Promotion'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slider/>
                <ProductList/>
                <Promotion/>
            </div>
        )
    }
}
