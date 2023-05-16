import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import myWorks from './imgs/myWorks.png'
import myskills from './imgs/myskills.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolio from './imgs/Portfolio.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function App() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  return (
    <div className="hero-image">
      <div className="">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-msg">
        <img src={portfolio} alt="text that say Portfolio"/>
        <img  className="p-msg2" src={myWorks} alt="my work. my passion. my creatives."/>
      </div>
      <Works />
      <img src={myskills} alt='illustration that says my skills' className="h-28" id='mine'/>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
