import logo from "../imgs/gray-logo.png";

export default function Navbar() {

    return (
      <div>
          <nav className="mt-16 mr-20 ml-16 flex justify-between">
            <img src={logo} alt="my personal logo" className="h-16" data-aos="fade-in" data-aos-duration="1500"/>
            <div className="flex justify-between" id="nav-links">
              <a 
              href="#Home" 
              className="pr-6 no-underline"
              data-aos='fade-right'
              data-aos-duration='1000'>HOME</a>
              <a 
              href="#About" 
              className="pr-6 no-underline"
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='200'>ABOUT</a>
              <a 
              href="#Works" 
              className="pr-6 no-underline"
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='400'>WORKS</a>
              <a 
              href="#Contact" 
              className="pr-6 no-underline"
              data-aos='fade-right'
              data-aos-duration='1000' 
              data-aos-delay='600'>CONTACT</a>
            </div>
          </nav>
      </div>
    )
}