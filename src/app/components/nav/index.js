import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 200;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <>
      <header className="header-area header-sticky wow slideInDown sticky top-0 z-50" data-wow-duration="0.75s" data-wow-delay="0s" style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}>
        <div className='md:px-36 sm:px-2'>
          <div className="grid grid-cols-1">
            <div>
              <nav className="main-nav">
                <a href="index.html" className="logo md:text-2xl sm:text-sm font-bold border-4">
                  <h1 style={{ color: '#3AB9F6' }}>COPICO SYSTEMS</h1>
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#networking">Networking</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#about">About</a></li>
                  <li className="scroll-to-section"><a href="#brands">Brands</a></li>
                  <li><div className="gradient-button"><a id="modal_trigger" href="#modal"><i className="fa fa-sign-in-alt"></i>Contact: +919617874449</a></div></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar