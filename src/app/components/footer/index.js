import React from 'react'
import Brands from '../brands';
const Footer = () => {
  return (
   <>
   <footer id="newsletter">
    <div className="md:px-24 px:10">
      <div className='md:px-20 px-4' id="brands">
      <div className="grid grid-cols-1">
        <div>
          <div className="section-heading">
            <h4>Discover Our Trusted Inventory of Quality Brands</h4>
          </div>
        </div>
        <div>
          <Brands/>
        </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div>
          <div className="footer-widget">
            <h4>Contact Us</h4>
            <p>Copico Systems,Tatyapara Chowk,Raipur,Chhattisgarh,492001</p>
            <p><a href="#">0771-4040787, 9617874449</a></p>
            <p><a href="#">copicosystems@yahoo.com</a></p>
          </div>
        </div>
        <div>
          <div className="footer-widget">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Networking</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-widget">
            <h4>About Our Company</h4>
            <div className="logo">
              <img src="/logo.png" alt="copico systems logo" />
            </div>
            <p>Discover the perfect synergy of technology and service at Copicosystems. Explore our website to learn more about our offerings and connect with us today.</p>
          </div>
        </div>
      </div>
        <div className="col-lg-12">
          <div className="copyright-text">
            <p>Copyright © 2000-{new Date().getFullYear()} Copico Systems. All Rights Reserved. 
          </p>
          </div>
        </div>
    </div>
  </footer>
   </>
  )
}

export default Footer