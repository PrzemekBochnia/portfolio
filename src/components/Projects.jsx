import React from 'react';
import BeerImg from '../assets/beer.png';
import Portfolio from '../assets/portfolio.png';
import Oddam from '../assets/oddam.png';
import ToDo from '../assets/ToDo.png';
import Weather from '../assets/weather.png';
import Pizza from '../assets/pizza.png';
import Rps from '../assets/rps.png';
import Book from '../assets/book.png';
import Netflix from '../assets/netflix.png';
import Yummy from '../assets/yummy.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-gradient-to-r from-[#2b5876] to-[#4e4376] pt-80'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-[6rem] text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Projects</p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>
        <div  className='grid sm:grid-cols-3 gap-4 '>
          <div style={{backgroundImage: `url(${BeerImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mybeersapp.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/MyBeersApp'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Portfolio})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/portfolio'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Oddam})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href='/'>
                  <button></button>
                </a>
                <a href='/'>
                  <button></button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${ToDo})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/ToDo'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Weather})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='https://transcendent-tiramisu-d98a28.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/weather'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Pizza})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='https://italian-pizza-c2a759.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/pizzaApp'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Rps})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='https://rockpaperscissors-ad85ee.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/rockpaperscissors'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Book})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mybookshelf-7dadf4.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/myBookshelf'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Netflix})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='https://pb-netflix-clone.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/Netflix-clone'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Yummy})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Apliccation
              </span>
              <div className='pt-8 text-center'>
                <a href='https://recipesyummyy.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/PrzemekBochnia/yummy'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Projects;
