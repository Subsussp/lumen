import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidereveal from "../Utills/Sidereveal";
import Tbreveal from "../Utills/Tbreveal";
import FuzzyOverlay from "./FuzzyOverlay";


const Header = () => {
  return (
//         <div  style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='28.8' height='28.8' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
//   }}
//         className="bg-black h-dvh">
//                 <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
//                     <div className="w-11/12 sm:w-2/3 my-20 lg:flex justify-center items-center flex-col sm:mb-10">
//                         <h1 className="text-2xl font-Second sm:text-3xl font-black md:text-4xl lg:text-5xl xl:text-6xl text-center text-white  leading-7 md:leading-10">
// Transform Your <span style={{'color':'var(--secondary)'}}>Journey {!isMobile ? '' : ','}</span>          
// <span className='font-[400]  sm:text-[2.5rem]' >Expert <span style={{'color':'#5b9c1f'}} >Dropshipping </span><span  style={{'color':'white'}}>Mentorship</span>
//   </span>
        
//                         </h1>
//                         <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Unleash Your Potential and Amplify Your Earnings</p></div>
//                     </div>
//                 </div>
//             </div>
    <section  
      className=" relative h-dvh from-black to-[#01031a] bg-gradient-to-b text-white flex items-center justify-center overflow-hidden">
        
<section  
style={{     
backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='28.8' height='28.8' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
}}
className=" relative w-full h-dvh bg-gradient-to-b to-[#01031a] flex items-center justify-center overflow-hidden"> 
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#01031a]/90 z-10" />
      {/* <h1 className='absolute text-[190px]  w-full nos text-center back top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>1 -on- 1</h1> */}
       <div className='w-[37.952%] absolute left-1/2 -translate-x-1/2  rounded md:top-[3%] top-[2%] lg:top-[5%] h-[80px] bg-[#171717] z-0'></div>

      <div className="relative z-10 text-center nos flex flex-col items-center -mt-[20%] sm:mt-16">
        <div className="maincontent"  data-scroll data-scroll-speed=".4">
            <span className='ovr text-6xl hidden sm:inline ' >Transform Your <span style={{'color':'var(--secondary)'}}>Journey </span>with</span>
            <span className='ovr text-6xl inline sm:hidden' >Transform Your <span style={{'color':'var(--secondary)'}}>Journey </span>,</span>
          <br/>
          <span className='ov  sm:text-5xl' >Expert <span style={{'color':'#5b9c1f'}}>Dropshipping </span><span  style={{'color':'white'}}>Mentorship</span></span>
        </div>
        <Sidereveal classes={'justify-items-center'}>
          <p className="mb-2 mt-4
  sm:max-w-[605px]
  sm:text-center
  sm:text-[14.4px]
  sm:font-Second
  sm:leading-[1.46]
  text-zinc-400
  md:text-md
  md:leading-[1.46]
  ">Unleash your full potential, build a real 6-figure online business from scratch, and amplify your earnings with daily hands-on mentorship.
  {/* // nos typing-text">Unleash Your Potential and Amplify Your Earnings<span className="bcursor">|</span> </p> */}

<span className="bcursor">|</span> </p>
        </Sidereveal>
                     <div className="flex nos justify-center items-center mt-16" data-scroll data-scroll-speed=".4">
      <Tbreveal duration={.2} classes={'focus:outline-none cursor-pointer bg-zinc-900/60 hover:bg-zinc-900/90 hover:text-zinc-50 sm:py-2 text-zinc-100 transition duration-300 ease-in-out lg:text-xl lg:font- rounded text-white px-4 sm:px-10 py-2 sm:py-2 font-Second text-sm'}>
                         <a target="_blank" rel="noopener noreferrer" href={'https://linktr.ee/MENTORFLOWX?fbclid=PAZXh0bgNhZW0CMTEAAacZLoD0Tp5DLoV-Cu7X48MjbgSUFJCuXoAjPNAwrShJLg_KXZ2FxJVhiq0BoA_aem_Ub6YhtP47C0yeKrbiqmyfQ'} className="">Get Started</a>
      </Tbreveal>
      <Tbreveal duration={.2} classes={'ml-4 cursor-pointer focus:outline-none hover:bg-blue-700 bg-secondary hover:text-zinc-50 text-zinc-100 transition duration-300 ease-in-out lg:text-xl lg:font- rounded px-4 sm:px-10 py-2 sm:py-2 font-Second text-sm'}>
                        <Link className="" to={'/details'}>Our Plan </Link>
      </Tbreveal>
</div>
      {/* <div className="btncon lg:w-[54%] w-[86%]" data-scroll data-scroll-speed=".4"> */}
        {/* <Tbreveal>
          <a target="_blank" rel="noopener noreferrer" className="bt text-sm transition-all bg-zinc-800 hover:bg-zinc-900 hover:text-zinc-50 rounded-md px-4 py-2 text-zinc-100 cursor-pointer" href={'https://linktr.ee/MENTORFLOWX?fbclid=PAZXh0bgNhZW0CMTEAAacZLoD0Tp5DLoV-Cu7X48MjbgSUFJCuXoAjPNAwrShJLg_KXZ2FxJVhiq0BoA_aem_Ub6YhtP47C0yeKrbiqmyfQ'}>Contact The Mentor</a>
        </Tbreveal> */}
        {/* <Tbreveal> */}
          {/* <a target="_blank" rel="noopener noreferrer" className="bt text-sm sm:text-lg transition-all bg-zinc-800 hover:bg-zinc-900 hover:text-zinc-50 rounded-md sm:px-4 sm:py-2 text-zinc-100 cursor-pointer" href={'https://linktr.ee/MENTORFLOWX?fbclid=PAZXh0bgNhZW0CMTEAAacZLoD0Tp5DLoV-Cu7X48MjbgSUFJCuXoAjPNAwrShJLg_KXZ2FxJVhiq0BoA_aem_Ub6YhtP47C0yeKrbiqmyfQ'}>Contact The Mentor</a> */}
        {/* </Tbreveal> */}
        {/* <Tbreveal>
          <Link className="bt bg-[var(--secondary)] text-sm transition-all hover:bg-blue-700 hover:text-zinc-50 rounded-md px-4 py-2 text-zinc-100" to={'/details'} >Our Plan Details</Link>
        </Tbreveal> */}
        {/* <Tbreveal> */}
          {/* <Link className="bt bg-[var(--secondary)] text-sm sm:text-lg transition-all hover:bg-blue-700 hover:text-zinc-50 rounded-md sm:px-4 sm:py-2 text-zinc-100" to={'/details'} >Our Plan Details</Link> */}
        {/* </Tbreveal> */}
      {/* </div> */}
      </div>
    </section>
    </section>
  )
}

export default Header