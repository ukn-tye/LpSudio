import Scroll from '../imgs/Scroll';
import arrow from '../imgs/down-arrow.png';
import spinWheel from '../imgs/spin-wheel.png';
import google from '../imgs/google.png';
import github from '../imgs/github.png';
import linkedIn from '../imgs/linkedin.png';

const Home = () => {
    return (
            <div id="Home">
            <div className="flex justify between">
                <div className="ml-44 mt-36" id="spot-1">
                     <h1 className="poppins">creative designer</h1>
                    <h1 className="mb-2 poppins">& developer</h1>
                    <p className="w-2/6 mt-3.5 mb-10">Hi im Lucas, a hardworking and passionate UX/UI Designer and Front-Developer based in Dallas Texas, ready to create, and deploy.</p>
                    <a href="#s" className="no-underline p-2 rounded-3xl flex justify-around items-center border-1">
                         SEE MY RESUME
                        <img src={arrow} alt="an arrow pointing down" className="h-5 arrow"  />
                    </a>
                    <div className="flex justify-between mt-12 w-48">
                        <a href='#d'><img src={google} alt="the google logo" className="p-1 h-10"/></a>
                        <a href='#d'><img src={github} alt="the github logo" className="p-1 h-10"/></a>
                        <a href='#d'><img src={linkedIn} alt="the linked in logo" className="p-1 h-10"/></a>
                    </div>
                </div> 
                <img  id="spin" src={spinWheel} alt="a pin of text" className="h-72" />
            </div>
            <div className="mt-24">
                <Scroll />
                <img src={arrow} alt="arrow pointing down" className="h-7 arrow" id="scroll-arrow" />
            </div>
            </div>
        
    )
}

export default Home;