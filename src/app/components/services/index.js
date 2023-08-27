import React from 'react'

const Services = () => {
  return (
    <>
    <div id="services" class="services section">
    <div>
      <div class="grid grid-cols-1">
        <div className='md:px-2 px-4'>
          <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h4>Other Amazing <em>Services &amp; Features</em> for you</h4>
            <img src="/heading-line-dec.png" alt="" />
            <p>Our diverse service offerings extend to troubleshooting, software installation, system optimization, and beyond.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 md:px-28 px-8">
        <div>
          <div class="service-item first-service">
            <div class="icon"></div>
            <h4>Sales and Service</h4>
            <p>Find the perfect computer solution that matches your requirements, backed by our expert guidance. Our team is dedicated to helping you make informed decisions and providing exceptional after-sales support.</p>
          </div>
        </div>
        <div>
          <div class="service-item second-service">
            <div class="icon"></div>
            <h4>Data Recovery</h4>
            <p>Accidentally lost critical data? Our data recovery experts are here to help you retrieve precious files from various storage devices swiftly and securely.</p>
          </div>
        </div>
        <div>
          <div class="service-item third-service">
            <div class="icon"></div>
            <h4>RDP Connectivity</h4>
            <p>Experience seamless remote access with our Remote Desktop Protocol (RDP) connectivity solutions. Stay connected to your digital world from anywhere.</p>
          </div>
        </div>
        <div>
          <div class="service-item fourth-service">
            <div class="icon"></div>
            <h4>Networking Solutions</h4>
            <p>Streamline your connectivity with our networking services. Whether its setting up a robust office network or enhancing your home Wi-Fi, we've got you covered.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Services