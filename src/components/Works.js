import cCross from '../imgs/cCross.png';
import cSquare from '../imgs/cSquare.png';
import cTriangle from '../imgs/cTriangle.png';
import cCircle from '../imgs/cCircle.png';
import peach from '../imgs/peach logo.png';

const Works = () => {
    return (
        <div className='mt-64'>
            <div className="project-border mr-16 ml-16 poppins rounded-xl flex justify-between mb-4">
                <h3 className='items-center'>VINYL</h3>
                <div className='flex mr-16  items-center'>
                    <p className='pr-16' id='white'>a music search engine app</p>
                    <img src={cCross} alt="colored cross icon" className="h-8 shapes"/>
                </div>
            </div>

            <div className="project-border mr-16 ml-16 poppins rounded-xl flex justify-between mb-4">
                <h3 className='items-center'>CODING QUIZ</h3>
                <div className='flex mr-16  items-center'>
                    <p className='pr-16' id='white'>a timed programming quiz application</p>
                    <img src={cCircle} alt="colored cross icon" className="h-8 shapes"/>
                </div>
            </div>

            <div className="project-border mr-16 ml-16 poppins rounded-xl flex justify-between mb-4">
                <h3 className='items-center'>BOOK FINDER</h3>
                <div className='flex mr-16  items-center'>
                    <p className='pr-16' id='white'>a node.js book finding database</p>
                    <img src={cTriangle} alt="colored cross icon" className="h-8 shapes"/>
                </div>
            </div>

            <div className="project-border mr-16 ml-16 poppins rounded-xl flex justify-between mb-4">
                <h3 className='items-center'>TEAM PROFILE PRINTER</h3>
                <div className='flex mr-16  items-center'>
                    <p className='pr-16' id='white'>a node.js business team profile printer</p>
                    <img src={cSquare} alt="colored cross icon" className="h-8 shapes"/>
                </div>
            </div>

            <div className="project-border mr-16 ml-16 poppins rounded-xl flex justify-between ">
                <h3 className='items-center'>SOCIALS</h3>
                <div className='flex mr-16  items-center'>
                    <p className='pr-16' id='white'>my social apps and business accounts</p>
                    <img src={peach} alt="colored cross icon" className="h-11 shapes"/>
                </div>
            </div>
        </div>
    )
}

export default Works;