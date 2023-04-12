import Marquee from "react-fast-marquee";
import circle from '../imgs/circle.png'
import square from '../imgs/square.png';
import triangle from '../imgs/triangle.png';
import cross from '../imgs/cross.png';
import abText from '../imgs/AB-text.png';


const Slider = () => {
    return (
        <div className='mt-28'>
            <Marquee pauseOnHover speed={70} className="pb-5">
                <img src={circle} alt="a circle png" className="h-10 slider"/>
                <img src={triangle} alt="a triangle png" className="h-10 slider"/>
                <img src={square} alt="a square png" className="h-10 slider"/>
                <img src={cross} alt="a cross png" className="h-10 slider"/>
                <img src={circle} alt="a circle png" className="h-10 slider"/>
                <img src={triangle} alt="a triangle png" className="h-10 slider"/>
                <img src={cross} alt="a cross png" className="h-10 slider"/>
                <img src={square} alt="a square png" className="h-10 slider"/>
                <img src={circle} alt="a circle png" className="h-10 slider"/>
                <img src={triangle} alt="a triangle png" className="h-10 slider"/>
                <img src={square} alt="a square png" className="h-10 slider"/>
                <img src={cross} alt="a cross png" className="h-10 slider"/>
                <img src={circle} alt="a circle png" className="h-10 slider"/>
                <img src={triangle} alt="a triangle png" className="h-10 slider"/>
                <img src={cross} alt="a cross" className="h-10 slider"/>
                <img src={square} alt="a square png" className="h-10 slider"/>
            </Marquee>
            <Marquee direction='right' pauseOnHover className="pb-5" speed={80}>
                <img src={circle} alt="a circle png" className="h-10 slider"/>
                <img src={triangle} alt="a circle png" className="h-10 slider"/>
                <img src={square} alt="a circle png" className="h-10 slider"/>
                <img src={abText} alt="a circle png" className="h-10 slider"/>
                <img src={circle} alt="a circle png" className="h-10 slider"/>
                <img src={triangle} alt="a circle png" className="h-10 slider"/>
                <img src={cross} alt="a circle png" className="h-10 slider"/>
                <img src={square} alt="a circle png" className="h-10 slider"/>
                <img src={circle} alt="a circle png" className="h-10 slider"/>
                <img src={triangle} alt="a circle png" className="h-10 slider"/>
                <img src={square} alt="a circle png" className="h-10 slider"/>
                <img src={cross} alt="a circle png" className="h-10 slider"/>
                <img src={circle} alt="a circle png" className="h-10 slider"/>
                <img src={triangle} alt="a circle png" className="h-10 slider"/>
                <img src={cross} alt="a circle png" className="h-10 slider"/>
                <img src={square} alt="a circle png" className="h-10 slider"/>
            </Marquee>
            
      </div>
    )
}

export default Slider;