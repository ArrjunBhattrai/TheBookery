import React from 'react'
import './HomePage.css'
import {Slideshow} from './Slideshow.js'
import { Outlet } from "react-router-dom";

export const HomePage = () =>{
     return(
       <div className="homepage-container">
        <div className = "slideshow">
            <Slideshow/>
        </div>
        <div className="card-container">
          <div className="card">
            <a href='' style={{textDecoration:"none"}}>
            <div className = "heading-container">
            <p className ="heading-container">End of Season Sale</p>
            </div>
            <div className = "image-container">
            <img src='image.png' alt=''></img>
            </div>     
            </a>
          </div>

          <div className="card">
            <a href='' style={{textDecoration:"none"}}>
            <div className = "heading-container">
            <p className ="heading-container">Student's Corner</p>
            </div>
            <div className = "image-container">
            <img src='image.png' alt=''></img>
            </div>     
            </a>
          </div>

          <div className="card">
            <a href='' style={{textDecoration:"none"}}>
            <div className = "heading-container">
            <p className ="heading-container">Min. 50% Off</p>
            </div>
            <div className = "image-container">
            <img src='image.png' alt=''></img>
            </div>     
            </a>
          </div>

          <div className="card">
            <a href='' style={{textDecoration:"none"}}>
            <div className = "heading-container">
            <p className ="heading-container">Gift Ideas</p>
            </div>
            <div className = "image-container">
            <img src='image.png' alt=''></img>
            </div>     
            </a>
          </div>

          <div className="card">
            <a href='' style={{textDecoration:"none"}}>
            <div className = "heading-container">
            <p className ="heading-container">Buy 2 Get 1 Free</p>
            </div>
            <div className = "image-container">
            <img src='image.png' alt=''></img>
            </div>     
            </a>
          </div>

          <div className="card">
            <a href='' style={{textDecoration:"none"}}>
            <div className = "heading-container">
            <p className ="heading-container">Review Your Buys</p>
            </div>
            <div className = "image-container">
            <img src='image.png' alt=''></img>
            </div>     
            </a>
          </div>

          <div className="card">
            <a href='' style={{textDecoration:"none"}}>
            <div className = "heading-container">
            <p className ="heading-container"></p>
            </div>
            <div className = "image-container">
            <img src='image.png' alt=''></img>
            </div>     
            </a>
          </div>

          <div className="card">
            <a href='' style={{textDecoration:"none"}}>
            <div className = "heading-container">
            <p className ="heading-container">Gift Ideas</p>
            </div>
            <div className = "image-container">
            <img src='image.png' alt=''></img>
            </div>     
            </a>
          </div>
        </div>   

        <div>
          <h4>Everything You Need to Write, Draw, and Create!</h4>
          <div>

          </div>
        </div>
      </div>
    )
} 