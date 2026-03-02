import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";




export default function Home(){
  return (
    <main>
      <Navbar/>
      <Hero/>
       <Services/>
      <About/>
     
      {/* <Skills/> */}
      
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}
