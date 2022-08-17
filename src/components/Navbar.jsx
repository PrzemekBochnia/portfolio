import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill, BsLinkedin} from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () =>{

    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return(
        <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-gradient-to-r from-[#2b5876] to-[#4e4376] text-gray-300'>
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
            <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#2b5876] to-[#4e4376] flex flex-col justify-center items-center'}>
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
            <div className="md:opacity-100 lg: opacity-80 flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gradient-to-r from-[#161b22] to-[#4e4376]">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-yellow-600" href="https://github.com/PrzemekBochnia"> Github<FaGithub size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gradient-to-r from-[#0a66c2]  to-[#4e4376] ">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-yellow-600" href="https://www.linkedin.com/in/przemys%C5%82aw-bochnia-26773a243/"> LinkedIn<BsLinkedin size={30}/></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500  bg-gradient-to-r from-[#6fc2b0] to-[#4e4376]">
                    <Link to="contact"  smooth={true} duration={500} className="flex justify-between items-center w-full text-gray-300 hover:text-yellow-600" href="/"> Email<HiOutlineMail size={30}/></Link>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500  bg-gradient-to-r from-[#565f69] to-[#4e4376]">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-yellow-600" href="https://drive.google.com/file/d/1Ka6N_DmbVto4muaJmkn4h5rZKwhdGaQ9/view?usp=sharing"> Resume<BsFillPersonLinesFill size={30}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;