import cLeft from "../imgs/contactLeft.png";
import cRight from "../imgs/contactRight.png";
import instagram from "../imgs/icons8-instagram-90.png";
import meta from "../imgs/icons8-meta-100.png";
import whitegit from "../imgs/white-github.png";
import whitegoogle from "../imgs/white-google.png";
import whitelink from "../imgs/whitelink.png";


const Contact = () => {
    return (
        <div className='bg-color-main pt-40'id="Contact">
            <div className="center">
                <h1 
                id="white" 
                className="poppins text-5xl"
                data-aos="fade-up"
                data-aos-duration="1000">Let's work togther.</h1>
                <p 
                id="white" 
                className="poppins pl-20 pb-20"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200">I'm available and ready to work.</p>
                <div 
                id="container" 
                className='pl-28'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200">
                <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                        <span className="icon point"></span>
                    </span>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmznLKrtvkqSbJrMdkBnVLHqCccPkJdvKMtKpbHScrDHHplbMXdDhFRxpcjBqvFkTzGTdG" 
                    className="no-underline"
                    target="_blank"><span className="button-text poppins">Contact Me</span></a>
                </button>
            </div>

            

            </div>
            <div className="flex justify-between items-center">
                <img src={cLeft} alt="left side illustration" className="cIllustration" />
                <div 
                className="flex justify-between contact-links mt-28">
                    <p id="white" className="font-light font-sm">LUCAS POLK 2023</p>
                    <span className="ml-8 grey-medium">|</span>
                    <ul className="flex items-center">
                        <li><a 
                        href="https://www.instagram.com/lp_studi0/" 
                        target="_blank"><img src={instagram} alt="an instagarm png" className="h-5 pr-3" /></a></li>
                        <li><a 
                        href="https://www.facebook.com/lucas.polk.31/" 
                        target="_blank"><img src={meta} alt="a meta png" className="h-5 pr-3" /></a></li>
                        <li><a 
                        href="https://github.com/ukn-tye" 
                        target="_blank"><img src={whitegit} alt="a github png" className="h-5 pr-3"  /></a></li>
                        <li><a 
                        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmznLKrtvkqSbJrMdkBnVLHqCccPkJdvKMtKpbHScrDHHplbMXdDhFRxpcjBqvFkTzGTdG" 
                        target="_blank"><img src={whitegoogle} alt="a google png" className="h-5 pr-3" /></a></li>
                        <li><a 
                        href="https://www.linkedin.com/in/lucas-polk-40b309235/" 
                        target="_blank"><img src={whitelink} alt="a linked in png" className="h-4 pr-3" /></a></li>
                    </ul>
                </div>
                <img src={cRight} alt="right side illustration" className="cIllustration" />
            </div>
        </div>
    )
}

export default Contact;