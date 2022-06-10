import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () =>{

    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='logo' style={{height:'80px'}}></img>
            </div>
            <div className="hidden md:flex">
                <ul className="hidden md:flex">
                    <li className="hover:text-yellow-600 duration-500">
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                    <li className="hover:text-yellow-600 duration-500">
                    <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                    <li className="hover:text-yellow-600 duration-500">
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                        </li>
                    <li className="hover:text-yellow-600 duration-500">
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                    <li className="hover:text-yellow-600 duration-500">
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                </ul>
            </div>
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl hover:text-yellow-600 duration-500">
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                <li className="py-6 text-4xl hover:text-yellow-600 duration-500">
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                    </li>
                <li className="py-6 text-4xl hover:text-yellow-600 duration-500">
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                    </li>
                <li className="py-6 text-4xl hover:text-yellow-600 duration-500">
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className="py-6 text-4xl hover:text-yellow-600 duration-500">
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
            </ul>
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-yellow-600" href="https://github.com/PrzemekBochnia"> Github<FaGithub size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
                    <Link to="contact"  smooth={true} duration={500} className="flex justify-between items-center w-full text-gray-300 hover:text-yellow-600" href="/"> Email<HiOutlineMail size={30}/></Link>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-yellow-600" href="https://drive.google.com/file/d/1i3_ECtuXRVfFw9EIObJA0E7FaAqLQlEO/view?usp=sharing"> Resume<BsFillPersonLinesFill size={30}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;