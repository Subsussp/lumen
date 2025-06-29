import React from 'react'
import Sidereveal from '../Utills/Sidereveal'
import Tbreveal from '../Utills/Tbreveal'

const Fragment2 = () => {
  return (
    <article className='frag relative w-full'>

                <div className="relative md:mx-12 ">
      <Tbreveal y={-60} duration={.5}>
          <div className=' text-center w-full text-[50px] text-white px-[10px] py-[5px]'>
Navigating Your Path to Profitable Success
        </div>
        <div className='par text-center w-full text-[20px] px-[10px] py-[5px] mb-16'>
        Leading the Way in Revolutionary Mentorship for Aspiring Entrepreneurs
        </div>
      </Tbreveal>

      {/* <div class="rounded-2xl p-4 transform duration-300 ease-in-out transition"> */}

                <div className='grid md:grid-cols-2 gap-16 items-center mb-24'>
                    <div className="relative w-[50%] h-80 md:w-96 md:h-96 ml-20 sm:mx-auto md:ml-8 lg:ml-28 z-10">
                      
            {/* First photo card */}
            <div className="absolute inset-0 group cursor-pointer opacity-1 ">
              <div className="w-60 h-72 md:w-68 md:h-80 bg-white rounded-2xl shadow-2xl transform -rotate-12 origin-bottom-right transition-all duration-500 ease-out hover:-rotate-6 hover:scale-105 hover:shadow-3xl group-hover:z-10 ml-2">
                <div className="p-2.5">
                  <div className="w-full h-full overflow-hidden relative">
                    <Sidereveal>
                    <img 
                      draggable="false" 
                      src="./Profit.jpg" 
                      alt="Photo" 
                      className="w-full nos h-auto fade-bottom object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      </Sidereveal>
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second photo card */}
            <div className="absolute inset-0 group cursor-pointer opacity-1">
              <div className="w-60 h-72 md:w-68 md:h-80 bg-white rounded-2xl shadow-2xl transform rotate-12 origin-bottom-left transition-all duration-500 ease-out hover:rotate-6 hover:scale-105 hover:shadow-3xl group-hover:z-10 ml-16 md:ml-20">
                <div className="p-2.5">
                  <div className="w-full h-full overflow-hidden relative">
                      <Sidereveal x={-40}>
                    <img 
                      draggable="false" 
                      src="./Profit2.jpg" 
                      alt="Photo" 
                      className="w-full nos h-[300px] object-[10%_40%] fade-bottom object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      </Sidereveal>
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Sidereveal delay={.1} duration={.6}>
        <div className='w-full space-y-8 sm:-mt-4 ml-4 sm:ml-0'>
            <h1 className='text-3xl font-bold text-white'>
                  Guiding Entrepreneurs to Industry Leadership
            </h1>
            <p className='text-gray-400 w-full sm:text-lg leading-relaxed '>we're more than just an e-commerce mentorship. We are dedicated to fostering a movement that empowers individuals to build scalable, automated, and immensely profitable online businesses through tried-and-true strategies.</p>
          {/* <Sidereveal x={50} delay={.3}> */}
            <a className='inline-block mt-4 px-8 py-3 bg-gradient-to-r from-[var(--secondary)] to-white rounded hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-lg transform hover:scale-95  transition-all duration-400' href='https://form.jotform.com/250372428512048' target="_blank" rel="noopener noreferrer">Be Part of the Revolution</a>
          {/* </Sidereveal> */}
          </div>
          </Sidereveal>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          </div>
       </article>
  )
}

export default Fragment2