import React from 'react'

import './Card.css';
import Signin from './Signin';
import Login from './Login';
//import img1 from './kerala-lottery-1200-1.jpg'  <img className='img' src = {img1} alt = "" />

export default function Card() {
  return (
    <div className='box'>
      <Login/>
      <Signin/>
      
      
    </div>
  )
}   
