import React, { Component } from 'react'

import './card-style.css'
export class CardUI extends Component {
    render() {
        return (
            <div className="card text-center">
            <div className='overflow'>
            <img alt="im" src={this.props.img} className='card-img-top'></img>

            </div>
                <div className="card-body text-dark">
<h4 className='card-title'>{this.props.title}</h4>
<p className='card-text text-secondary'>grewfeefwwqqwqwdwwqdwwdqwdqqdwqwwqddwq</p>
<a href='#' className='btn btn-outline-success'>go anywhere</a>
                </div>
            </div>
        )
    }
}

export default CardUI
