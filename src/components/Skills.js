import reactimg from '../imgs/icons8-react-96.png';
import figma from '../imgs/icons8-figma-96.png';
import illustrator from '../imgs/icons8-adobe-illustrator-96.png';
import photoshop from '../imgs/icons8-adobe-photoshop-96.png';
import javascript from '../imgs/icons8-javascript-96.png';
import html from '../imgs/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-96.png';
import node from '../imgs/icons8-node-js-96.png';
import css from '../imgs/icons8-css-96.png';
import lightroom from '../imgs/icons8-adobe-lightroom-96.png';
import Marquee from "react-fast-marquee";

const Skills = () => {  
    return (
        <div className='h-96 ml-12 mr-12'>
           
            <Marquee speed={40} gradient={false} className=" bg-color-main items-center h-32 rounded-xl ">
                <img src={reactimg} alt="a circle png" className="h-16 slider "/>
                <img src={figma} alt="a triangle png" className="h-16 slider"/>
                <img src={photoshop} alt="a square png" className="h-16 slider"/>
                <img src={node} alt="a cross png" className="h-16 slider"/>
                <img src={css} alt="a circle png" className="h-16 slider"/>
                <img src={illustrator} alt="a triangle png" className="h-16 slider"/>
                <img src={html} alt="a cross png" className="h-16 slider"/>
                <img src={lightroom} alt="a square png" className="h-16 slider"/>
                <img src={javascript} alt="a circle png" className="h-16 slider"/>
                <img src={reactimg} alt="a circle png" className="h-16 slider"/>
                <img src={figma} alt="a triangle png" className="h-16 slider"/>
                <img src={photoshop} alt="a square png" className="h-16 slider"/>
                <img src={node} alt="a cross png" className="h-16 slider"/>
                <img src={css} alt="a circle png" className="h-16 slider"/>
                <img src={illustrator} alt="a triangle png" className="h-16 slider"/>
                <img src={html} alt="a cross png" className="h-16 slider"/>
                <img src={lightroom} alt="a square png" className="h-16 slider"/>
                <img src={javascript} alt="a circle png" className="h-16 slider"/>    
            </Marquee>
        </div>
    )
}

export default Skills;