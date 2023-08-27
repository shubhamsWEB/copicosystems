'use client'
import NavBar from './components/nav';
import Banner from './components/banner';
import Services from './components/services';
import AboutUs from './components/aboutUs';
import Footer from './components/footer';
import Networking from './components/networking';

export default function Home() {
  return (
    <>
    <main>
      <NavBar/>
      <Banner/>
      <Networking/>
      <Services/>
      <AboutUs/>
      <Footer/>
    </main>
    </>
  )
}
