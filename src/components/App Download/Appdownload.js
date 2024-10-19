import React from 'react';
import './appdownload.css'
import { assets } from '../../assets/assets';

const Appdownload = () => {
  return (
    <div className='appdowload' id='appdownlaod'>
        <p>For Better Expirence Download <br/>Tomato App</p>
        <div className='app-downlaod-platforms'>
            <img src={assets.play_store}></img>
            <img src={assets.app_store}></img>
        </div>
    </div>
  )
}

export default Appdownload