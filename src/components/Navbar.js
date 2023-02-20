import limeLogo from '../imgs/lime-logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import menuIcon from '../imgs/lime-menu.png';
import boxIcon from "boxicons";




export default function Navbar() {

    return (
        <nav className="ml-16 mr-16 flex justify-between items-center">
          <div className='flex justify-between items-center w-28 mt-10'>
            <img src={limeLogo} alt="black lp logo" className="h-12" />
            <h1 className='text-xl mt-2 spaceG font-medium grey-medium'>STUDIO</h1>
          </div>  
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown">
            <img src={menuIcon} alt="three horizontal lines" className="h-3 items-center mt-12  " />
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-menu">
              <Dropdown.Item href="#/action-1" id="dropdown-item">Home</Dropdown.Item>
              <Dropdown.Item href="#/action-1" id="dropdown-item">Skills</Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="dropdown-item">About</Dropdown.Item>
              <Dropdown.Item href="#/action-3" id="dropdown-item">Portfoilio</Dropdown.Item>
              <Dropdown.Item href="#/action-3" id="dropdown-item">Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
    )
}