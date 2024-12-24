import React from 'react'
import './Footer.css'

export const Footer = () => { 
    return (
        <footer class = "footer-container">
            <div class = "footer-card">
                <h5 class = "footer-heading">Get to Know Us</h5>
                <div class="footer-item-card">
                    <a class = "footer-item" href = "">About TheBookery</a>
                    <a class = "footer-item" href = "">Press Realease</a>
                    <a class = "footer-item" href = "">Carrers</a>
                    <a class = "footer-item" href = "">Copyright Notice</a>
                </div>
            </div>
            <div class = "footer-card">
            <h5 class = "footer-heading">Contact Us</h5>
                <div class="footer-item-card">
                <a class = "footer-item" href = "">Mail Us</a>
                <a class = "footer-item" href = "">Chat Bot</a>
                <a class = "footer-item" href = "">Call Us</a>
                </div>
            </div>
            <div class = "footer-card">
            <h5 class = "footer-heading">Connect with Us</h5>
                <div class="footer-item-card">   
                <a class = "footer-item" href = "">Facebook</a>
                <a class = "footer-item" href = "">Instagram</a>
                <a class = "footer-item" href = "">Threads</a>
                <a class = "footer-item" href = "">Twitter</a>
                </div>
            </div>
            <div class = "footer-card">
            <h5 class = "footer-heading">Let Us Help You</h5>
                <div class="footer-item-card">
                <a class = "footer-item" href = "">Your Account</a>
                <a class = "footer-item" href = "">Help Centre</a>
                <a class = "footer-item" href = "">Return Policy</a>
                <a class = "footer-item" href = "">The Bookery Policy</a>
                <a class = "footer-item" href = "">Consumer Policy</a>
                </div>
            </div>
        </footer>
    )
}