import me from "../imgs/aboutMe.png";
import arrow from '../imgs/down-arrow.png';

const About = () => {
    return (
        <div className="ml-20 mr-16 mt-32 flex space-between items-center ">
            <img src={me} alt="an illustration with a picture of me in it" className="me" />
            <div className="ml-20">
                <h2 className='big'>hello there</h2>
                <h2 className='big mb-4'>my names lucas</h2>
                <p className="w-full spaceG mb-10"> I'm a web developer/UX UI designer with a heavy design passion and skill set. I enjoy making creative solutions for the different problems we have in the tech industry. Take a look at the few projects and solutions I've displayed here on my portfolio.
                </p>
                <a href="#s" className="no-underline p-2 rounded-3xl flex justify-around items-center border-1">
                    VIEW MY WORKS
                    <img src={arrow} alt="an arrow pointing down" className="h-5 arrow"  />
                </a>

            </div>
        </div>
    )
}

export default About;