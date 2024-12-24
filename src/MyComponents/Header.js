import React from 'react'
import { GoSearch } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import './Header.css'
import { Link } from "react-router-dom";

export const Header = () => { 
    return (
  <nav className = "navbar">
    <div  >
      <a href='/'>
      <img className="logo" src = "/logo.png" ></img></a>
    </div>
    <div className="items-container">
       <a className = "item" href='/trending'>Trending</a>
       <a className = "item" href='/explore'>Explore</a>
       <a className = "item" href='/categories'>Categories</a>
       <div className="search-box">
        <form>
          <input
            type="text"
            className="search-input"
            placeholder="  Search..." />
          <button type="submit" className="search-button">
           <GoSearch style = {{color : "#1b3c73" , fontSize:"20px"}} />
          </button>
        </form>
        </div>
        <div className="user-container">
           <div >
            <a  className="wishlist-container" href="">
              <FaHeart style = {{color : "#ffcad4" , fontSize : "25px" , marginLeft : "22px"}} />
              <p style = {{marginTop:"1px", color : "#ffcad4"}}>My Wishlist</p>
            </a>
            </div>
            <div className="cart-container">
            <a  href="" >
              <BsCart4 style = {{color : "#ffcad4" , fontSize : "40px"}}/>
             
            </a>
            </div>
            <div className="userimage-container">
            <a  href="">
              <FaUserCircle style = {{color : "#ffcad4" , fontSize : "40px"}}/>
            </a>
            </div>
        </div>
    </div>
  </nav>  
  
    )
}

