import React, { Component } from 'react'
import Card from './cardUI'
import img1 from '../assets/14358.jpg'
import img2 from '../assets/8a619aff296d18610859b84bf9468611.jpg'
import img3 from '../assets/download.jpg'

export default class Cards extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
<Card img={img1} title={'marvel'}/>
                    </div>
                    <div className='col-md-4'>
                        <Card img={img2} title={'avengers'}/>
                    </div>
                    <div className='col-md-4'>
                        <Card img={img3} title={'batman  '}/>
                    </div>
                </div>
            </div>
 
        )
    }
}
