import Navbar from './components/Navbar';
import Home from './components/Home';
import Slider from './components/Slider';
import About from './components/About';
import Works from './components/Works';
import myWorks from './imgs/myWorks.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolio from './imgs/Portfolio.png'

function App() {
  return (
    <div className="hero-image">
      <div className="">
        <Navbar />
        <Home />
      </div>
      <Slider />
      <About />
      <div className="p-msg">
        <img src={portfolio} alt="text that say Portfolio"/>
        <img  className="p-msg2" src={myWorks} alt="my work. my passion. my creatives."/>
      </div>
      <Works />
    </div>
  );
}

export default App;
