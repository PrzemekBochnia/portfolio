import React from 'react';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Sass from '../assets/Sass.png';
import JavaScript from '../assets/javascript.png';
import React_ from '../assets/react.png';
import Github from '../assets/github.png';
import Firebase from '../assets/firebase.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import TypeScript from '../assets/typescript.png';

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div className='text-center pt-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={Html} alt="Html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={Css} alt="CSS" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 h-20 mx-auto' src={Sass} alt="SASS" />
                    <p className='my-4'>SASS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={React_} alt="React" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={Github} alt="Github" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={TypeScript} alt="Typescript" />
                    <p className='my-4'>Typescript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={Firebase} alt="Firebase" />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={Node} alt="Node" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-yellow-600'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind" />
                    <p className='my-4'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
};
export default Skills;
