import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from "react-scroll";


const Home = () => {
  
  
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full text-center'>
            <p className='text-yellow-600 text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Przemek Bochnia</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-end Developer.</h2>
            {/* <p className='text-[#8892b0] py-4 px-8'>Front-end Developer jest odpowiedzialny za implementację elementów wizualnych, które są widoczne dla użytkowników i z którymi wchodzą oni w interakcję w aplikacji lub stronie internetowej. Optymalizuje działanie projektów pod jak najkrótsze czasy ładowania, czy np. responsywność.</p> */}
        <div className='flex justify-center'>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600 duration-500'>
            <Link to="projects" smooth={true} duration={500}>View Work</Link>
            <span className='hover:rotate-90 duration-300'>
            <Link to="projects" smooth={true} duration={500}><HiArrowNarrowRight className='ml-3'/></Link>
            </span>
            </button>
        </div>
        </div>
    </div>
  )
};
export default Home;
