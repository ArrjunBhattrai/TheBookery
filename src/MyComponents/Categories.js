import React from 'react'
import './Categories.css'

export const Categories = () =>{
    return (
        <div className="categories-container">
            <div style = {{fontSize:"40px",color:"#ff407d",fontFamily:" 'Montserrat',sans-serif"}}>
                <p>
                    Discover Your<span style = {{fontFamily:"'Tangerine',sans-serif",fontSize:"80px",marginLeft:"5px"}}>Genre</span> 
                </p>
            </div>
            <div className="genre-container">
                <div className="genre-card">
                    <a href=""style={{textDecoration:"none"}}>
                        <p className="genre-card-text">Fantasy</p>
                        <img className = "genre-card-image" src = "image.png"></img>
                    </a>
                </div>

                <div className="genre-card">
                    <a href=""style={{textDecoration:"none"}}>
                        <p className="genre-card-text">Self Help</p>
                        <img className = "genre-card-image"src = "image.png"></img>
                    </a>
                </div>

                <div className="genre-card">
                    <a href=""style={{textDecoration:"none"}}>
                        <p className="genre-card-text">Mystery</p>
                        <img className = "genre-card-image"src = "image.png"></img>
                    </a>
                </div>

                <div className="genre-card">
                    <a href=""style={{textDecoration:"none"}}>
                        <p className="genre-card-text">Horror</p>
                        <img className = "genre-card-image"src = "image.png"></img>
                    </a>
                </div>

                <div className="genre-card">
                    <a href="" style={{textDecoration:"none"}}>
                        <p className="genre-card-text">Biography</p>
                        <img className = "genre-card-image"src = "image.png"></img>
                    </a>
                </div>

                <div className="genre-card">
                    <a href=""style={{textDecoration:"none"}}>
                        <p className="genre-card-text">Classics</p>
                        <img className = "genre-card-image"src = "image.png"></img>
                    </a>
                </div>

                <div className="genre-card">
                    <a href=""style={{textDecoration:"none"}}>
                        <p className="genre-card-text">History</p>
                        <img className = "genre-card-image"src = "image.png"></img>
                    </a>
                </div>

                <div className="genre-card">
                    <a href=""style={{textDecoration:"none"}}>
                        <p className="genre-card-text">Rom-Com</p>
                        <img className = "genre-card-image"src = "image.png"></img>
                    </a>
                </div>

            
            </div>
            
        </div>
    )
}