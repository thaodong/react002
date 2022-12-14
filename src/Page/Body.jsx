import React, { Component } from 'react'
import Header from '../Component/Header'
import Model from '../Component/Model'

export default class Body extends Component {
  render() {
    return (
      <div style={{background:'url(./glassesImage/background.jpg', backgroundRepeat:'no-repeat', backgroundSize:'100%'}}>
        <Header/>
        <Model/>
      </div> 
    )
  }
}
