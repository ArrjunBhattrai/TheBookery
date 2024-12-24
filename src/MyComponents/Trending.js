import React from 'react'
import './Trending.css'
import {Slider} from './TrendingSlider.js'


export const Trending = () =>{
    return(
        <div className="trending-container">
            <div className="banner-container">
                <p className="text" style={{marginLeft : "98px"}}>
                    <div style={{fontFamily:"'Tangerine',sans-serif",fontSize:"60px"}}>Author  <span style={{fontFamily: "'Montserrat',sans-serif",fontSize:"45px",marginLeft:"5px"}}>of</span> </div> 
                    <div style={{fontFamily: "'Montserrat',sans-serif",fontSize:"30px"}} >the <span style={{fontFamily:"'Tangerine',sans-serif",fontSize:"70px"}}>Month</span></div></p>
                <img className="image"src='authorOfTheMonth.png'></img>
                <p className="text">
                    <div style={{fontFamily: "'Montserrat',sans-serif",fontSize:"50px"}} >Jennifer</div>
                    <div style={{fontFamily:"'Tangerine',sans-serif",fontSize:"70px"}}>Lyn</div>  
                    <div style={{fontFamily: "'Montserrat',sans-serif",fontSize:"50px"}}>Barnes</div></p>
            </div>
            <div className="fiction-slider-container">
                <p style={{marginLeft:"28px",marginTop:"28px", fontSize:"35px",color :"#ff407d"}}>Trending in <span style={{fontFamily:"'Tangerine',sans-serif",fontSize:"60px"}}>Fiction</span> </p>
                <div className="fiction-slider">
                   <Slider/>
                </div>
            </div>
            <div className="selfhelp-slider-container">
                <p style={{marginLeft:"28px",marginTop:"28px", fontSize:"35px",color :"#ff407d"}}>Trending in <span style={{fontFamily:"'Tangerine',sans-serif",fontSize:"60px"}}>Self-Help</span></p>
                <div className="fiction-slider">
                <Slider/>
                </div>
            </div>
            <div className="selfhelp-slider-container">
                <p style={{marginLeft:"28px",marginTop:"28px", fontSize:"35px",color :"#ff407d"}}>Trending in <span style={{fontFamily:"'Tangerine',sans-serif",fontSize:"60px"}}>Stationary </span></p>
                <div className="fiction-slider">
                <Slider/>
                </div>
            </div>
        </div>
    )
}