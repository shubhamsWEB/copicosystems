import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const [mNavOpen, setMNav] = useState(false);
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
        zIndex:999999999
      }}>
        <nav className="main-nav">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap" style={{ color: '#3AB9F6',fontWeight:'bolder' }}>Copico Systems</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false" onClick={() => setMNav(!mNavOpen)}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className={`${mNavOpen ? '' : 'hidden' } w-full md:block md:w-auto`} id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white items-center">
                <li>
                  <a onClick={() => setMNav(!mNavOpen)} href="#top" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:p-0">Home</a>
                </li>
                <li>
                  <a onClick={() => setMNav(!mNavOpen)} href="#networking" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Networking</a>
                </li>
                <li>
                  <a onClick={() => setMNav(!mNavOpen)} href="#services" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                  <a onClick={() => setMNav(!mNavOpen)} href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a onClick={() => setMNav(!mNavOpen)} href="#brands" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</a>
                </li>
                <li><div className="gradient-button"><a id="modal_trigger" href="#modal"><i className="fa fa-sign-in-alt"></i>Contact: +919617874449</a></div></li>
                <li><div id="google_translate_element" className='google-translate'></div></li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar