/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const About = () => {
  return (
   <>
    <div id="about" className="about-us section">
    <div className='md:px-28 px-10'>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="align-self-center">
          <div className="section-heading">
            <h4>Who We Are &amp; <em>Why Choose us</em></h4>
            <p>Unveiling Excellence Since 2000 at Copico systems. Your Ultimate Destination for Premium Computers, Peripherals, and Exceptional Services. Explore Two Decades of Expertise in Tech Solutions</p>
            <p>At Copicosystems, we stand at the forefront of innovation, consistently delivering cutting-edge RDP networking connectivity solutions. With years of experience, a commitment to security, and a passion for seamless technology, we're your partners in achieving business success.</p>

          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <div className="box-item">
                <h4><a href="#">Expertise You Can Trust</a></h4>
                <p>Seasoned experts with deep tech insight and industry experience.</p>
              </div>
            </div>
            <div>
              <div className="box-item">
                <h4><a href="#">Customer-Centric</a></h4>
                <p>Your happiness matters. Tailored solutions for your success.</p>
              </div>
            </div>
            <div>
              <div className="box-item">
                <h4><a href="#">Quality Assurance</a></h4>
                <p>Quality products, impeccable service, trusted brands.</p>
              </div>
            </div>
            <div>
              <div className="box-item">
              <h4><a href="#">24/7 Support &amp; Help</a></h4>
                <p>Round-the-clock support, always here for you.</p>
              </div>
            </div>
          </div>
        </div>
          <div className="right-image md:block hidden">
            <img src="/about-us.png" alt="RDP Connection" />
          </div>
      </div>
    </div>
  </div>
   </>
  )
}

export default About