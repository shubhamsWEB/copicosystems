/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <>
     <div className="main-banner" id="top">
      <div className="grid grid-cols-1">
        <div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="align-self-center">
              <div className="left-content show-up header-text">
                <div className="grid grid-cols-1 pt-16">
                  <div>
                    <h1>Your Ultimate Destination for Computer Solutions and Services</h1>
                    <p>Embrace the future of business networking with Copico Systems. With 23 Years of Expertise in Tech Solutions and RDP connectivity.</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="right-image">
                <img src="/banner.png" alt="Networking"/>
              </div>
          </div>
        </div>
      </div>
  </div>
    </>
  )
}

export default Banner