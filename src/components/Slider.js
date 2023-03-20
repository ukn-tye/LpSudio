import Marquee from "react-fast-marquee";
import practice from "../imgs/lime-logo.png";

const Slider = () => {
    return (
        <div>
            <Marquee>
                <img src={practice} alt="pic ded"/>
            </Marquee>
        </div>
    )
}

export default Slider;