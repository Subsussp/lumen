import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import menuItems from './Files/Dropdownmenu';
import Tbreveal from '../Utills/Tbreveal';

const Navbar = ({textEnter,textLeave,location}) => {
 const [isMobile, setIsMobile] = useState()
 const [showList, setShow] = useState()
  useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth < 768){
            setIsMobile(true); // Show only if less than md
        }else{
          setIsMobile(false)
        }
      };
  
      handleResize(); // Run once on mount
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
 
  return (
    <header className='nav w-full h-[72px] fixed border-gray-700 top-0 z-50 flex flex-center flex-col flex-nowrap'>
      <div className={`NN-main-header sm:py-[18px] sm:px-[24px] md:px-[54px] md:py-[18px] px-6 py-3`}>
        {location != '/' ? <Link to="/" className='LSide nos' onMouseEnter={textEnter}  onMouseLeave={textLeave} >MentorFlowX</Link> :
        <div className='LSide nos' onMouseEnter={textEnter}  onMouseLeave={textLeave} >MentorFlowX</div>}
          {isMobile ? !showList ?
          <div className="flex items-center">
                <button
                onClick={()=>{
                  setShow(!showList)
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                {(!showList) && (
                  <Menu className="block h-6 w-6 text-white" aria-hidden="true" />
                )}
                </button>
            </div> : <div className={`block bg- shadow-lg fixed top-0 left-0 w-screen h-screen z-50`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black sm:px-3  h-screen  w-[100vw] flex items-center flex-col overflow-y-auto">
            <button
                onClick={()=>{
                  setShow(!showList)
                }} className="block py-[15px] mb-[30px] px-[46px] place-self-end h-6 w-6 text-white"><X aria-hidden="true" /></button>
           <div className='flex flex-col divide-y w-full h-full divide-white divide-opacity-10 border-t border-white border-opacity-10 border-b overflow-hidden js-menu-inner'> 
            {menuItems.map((Obj,index)=>{
             if(Obj.divider){
               return <hr key={index} className="my-2 w-full border-1 border-one"/>
              }
              return <Tbreveal delay={index * .3}>  {Obj.href ?
                                <a
                                href={Obj.href}
                                target="_blank" rel="noopener noreferrer"
                                className="flex w-full font-Main items-center space-x-3 block px-3 py-20 text-3xl text-white">
                                {Obj.label}
                                </a> : <Link
                                onClick={()=>setShow(false)}
                                to={Obj.link}
                                className="flex w-full font-Main items-center space-x-3 block px-3 py-20 text-3xl text-white">
                                {Obj.label}
                                </Link> }</Tbreveal>
                }
                              )}
                              </div>
                

            </div>
                </div>  : <div className='RSide nos'>
          <div className='subnav'>
            <Link onMouseEnter={textEnter} onMouseLeave={textLeave} to="/About" className='sub'>About</Link>
            <Link onMouseEnter={textEnter} onMouseLeave={textLeave} to="/Contact" className='sub'>Contact</Link></div>
            <a target="_blank" onMouseEnter={textEnter}  onMouseLeave={textLeave} className='exe relative group-hover:text-white transition-colors duration-300 flex items-center' href='https://form.jotform.com/250372428512048'>Get Started</a>
        </div>}
      </div>
    </header>
  )
}

export default Navbar