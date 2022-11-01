import React from 'react'
import logo from './images/logo.svg'

export default function Logo() {
  return(
    <div>   
    <img src={logo} style={{background: 'purple', borderRadius: "50%"}} alt="logo" width= "100" height="100"/>
    </div>
  )
}