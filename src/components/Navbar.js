import logo from "../imgs/gray-logo.png";




export default function Navbar() {

    return (
      <div>
        <nav className="mt-16 mr-20 ml-16 flex justify-between">
          <img src={logo} alt="my personal logo" className="h-16"/>
          <div className="flex justify-between" id="nav-links">
            <a href="#Home" className="pr-6 no-underline">HOME</a>
            <a href="#About" className="pr-6 no-underline">ABOUT</a>
            <a href="#Works" className="pr-6 no-underline">WORKS</a>
            <a href="#Contact" className="pr-6 no-underline">CONTACT</a>
          </div>
        </nav>
      </div>
    )
}