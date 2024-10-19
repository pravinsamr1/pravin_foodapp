import React from 'react';
import './fotter.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}></img>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <div className='footer-content-icon'>
                    <img src={assets.facebook_icon} ></img>
                    <img src={assets.twitter_icon} ></img>
                    <img src={assets.linkedin_icon} ></img>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <div>
                    <ol>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ol>
                </div>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ol>
                    <li>+91 8925567344</li>
                    <li>contact@tomato.com</li>
                </ol>
            </div>
        </div>
        <hr></hr>
        <p className='footer-copyright'>
            Copyright 2024 &copy; Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer