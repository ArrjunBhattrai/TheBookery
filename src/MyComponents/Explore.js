import React from 'react'
import './Explore.css'
import {Slider} from './ExploreSlider.js'
export const Explore = () => {
    return(
        <div className="explore-container">
            <div className= "recently-added-container">
                <div style={{fontSize:"80px",color:"#ff407d",margin:"auto",fontFamily:"'Tangerine', sans-serif"}}>
                    Recently <div>Added</div>
                </div>
                <div className="slider">
                   <Slider/>
                </div>
            </div>
            <div className="cards-1">
               <a href='' style={{textDecoration:"none"}}>
                <div className="rebuy-container">
                <p className='rebuy-text'>REBUY!?</p>
                <img className='rebuy-image' src='image.png'></img>
                </div>
               </a>
               
               <a href='' style={{textDecoration:"none"}}>
                <div className='explore-wishlist-container'>
                <p className='explore-wishlist-text'>Similar to your Wishlist</p>
                <img className = "explore-wishlist-image" src='image.png'></img>
                </div>
               </a>
               <a href='' style={{textDecoration:"none"}}>
                <div className='explore-wishlist-container'>
                <p className='explore-wishlist-text'>Similar to your Wishlist</p>
                <img className = "explore-wishlist-image" src='image.png'></img>
                </div>
               </a>
               <a href='' style={{textDecoration:"none"}}>
                <div className='explore-wishlist-container'>
                <p className='explore-wishlist-text'>Similar to your Wishlist</p>
                <img className = "explore-wishlist-image" src='image.png'></img>
                </div>
               </a>
               
            </div>

            <div className="cards-2">
            <div className="pwb-ab-container">
                    <div className="pwb-container">
                        <p className="pwb-text">People who bought</p>
                        <div className="pwb-img-container">
                           <a href=""  style={{textDecoration:"none"}}>
                           <div style={{display:"flex",justifyContent:"center",color:"#1b3c73",fontSize:"25px",marginTop:"-20px"}}>
                                <h5>Title</h5>
                            </div>
                            <img className="pwb-image" src="image.png"></img>
                            </a>     
                        </div>
                    </div>
                    <div className="ab-container">
                        <p className="ab-text">Also bought</p>
                        <div className="ab-img-container">
                           <a href=""  style={{textDecoration:"none"}}>
                           <div style={{display:"flex",justifyContent:"center",color:"#1b3c73",fontSize:"25px",marginTop:"-20px"}}>
                                <h5>Title</h5>
                            </div>
                            <img className="ab-image"></img>
                            </a>     
                        </div>
                    </div>
                </div>

                <div className="pwb-ab-container">
                    <div className="pwb-container">
                        <p className="pwb-text">People who bought</p>
                        <div className="pwb-img-container">
                           <a href=""  style={{textDecoration:"none"}}>
                           <div style={{display:"flex",justifyContent:"center",color:"#1b3c73",fontSize:"25px",marginTop:"-20px"}}>
                                <h5>Title</h5>
                            </div>
                            <img className="pwb-image"></img>
                            </a>     
                        </div>
                    </div>
                    <div className="ab-container">
                        <p className="ab-text">Also bought</p>
                        <div className="ab-img-container">
                           <a href=""  style={{textDecoration:"none"}}>
                           <div style={{display:"flex",justifyContent:"center",color:"#1b3c73",fontSize:"25px",marginTop:"-20px"}}>
                                <h5>Title</h5>
                            </div>
                            <img className="ab-image"></img>
                            </a>     
                        </div>
                    </div>
                </div>

                <div className="pwb-ab-container">
                    <div className="pwb-container">
                        <p className="pwb-text">People who bought</p>
                        <div className="pwb-img-container">
                           <a href=""  style={{textDecoration:"none"}}>
                           <div style={{display:"flex",justifyContent:"center",color:"#1b3c73",fontSize:"25px",marginTop:"-20px"}}>
                                <h5>Title</h5>
                            </div>
                            <img className="pwb-image"></img>
                            </a>     
                        </div>
                    </div>
                    <div className="ab-container">
                        <p className="ab-text">Also bought</p>
                        <div className="ab-img-container">
                           <a href=""  style={{textDecoration:"none"}}>
                           <div style={{display:"flex",justifyContent:"center",color:"#1b3c73",fontSize:"25px",marginTop:"-20px"}}>
                                <h5>Title</h5>
                            </div>
                            <img className="ab-image"></img>
                            </a>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}