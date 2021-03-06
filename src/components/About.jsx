import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-[#2b5876] to-[#4e4376] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full text-center'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 contents'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl text-left font-bold inline border-b-4 border-yellow-600'>About</p>
                </div>
                {/* <div></div> */}
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Przemek, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                        I completed an IT course at Coders Lab school and I want to get my first professional experience
                        as a Junior Front-end developer. I've always been interested in IT and
                        new technologies, and the course helped me in the practical application of
                        technologies such as HTML & CSS, SASS, JavaScript or React. I am a communicative person and
                        I can work in group. I try to develop my skills through creating my own projects.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
};
export default About;
