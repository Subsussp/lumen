import React from 'react'
import { MdOutlineTask } from 'react-icons/md'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { IoIosFlash } from "react-icons/io";
import Sidereveal from '../Utills/Sidereveal';
import Tbreveal from '../Utills/Tbreveal';

const Fragment = () => {
  return (
    <article className='frag relative py-24 px-4 w-full '>
      <div className='text-center w-full text-[45px] text-white px-[9px] py-[4.5px]'>
        How Our Expert Mentorship Elevates Your Success 
    </div>
    <div className='par text-center w-full text-[18px] px-[9px] py-[4.5px] mb-[57.6px]'>
      Unlock the Power of Our Proven System: Launch, Scale, and Automate Your E-Commerce Business
    </div>
    <div className='grid md:grid-cols-3 gap-8 mb-16'>
      <Tbreveal delay={.15}>
      <div className='rounded-[14.4px] p-[28.8px] transform hover:scale-105 hover:bg-secondary transition-all duration-300 shadow-xl bg-gray-800'>
        <div className="text-[21.6px] font-bold text-white/50 mb-[21.6px]" x-text="step.number">01</div>
        <MdOutlineTask className='mb-[72px] w-[57.6px] h-[57.6px] p-[7.2px] rounded-full bg-white/10 flex items-center justify-center' size={'9px'}/>
        <h3 className="font-bold text-white text-[18px] mb-[14.4px]" x-text="step.title">Build &amp; Optimize</h3>
        <p className="text-gray-400" x-text="step.description">Design a professional Shopify store that looks legit, builds trust, and converts browsers into paying customers</p>
      </div>
      </Tbreveal>
      <Tbreveal delay={.35}>
      <div className="rounded-[14.4px] p-[28.8px] transform hover:scale-105 duration-300 ease-in-out transition-all hover:bg-secondary shadow-xl bg-gray-800">
                            <div className="text-[21.6px] font-bold text-white/50 mb-[21.6px]" x-text="step.number">02</div>
                              <BiBarChartAlt2 className='mb-[72px] transform w-[57.6px] h-[57.6px] p-[7.2px] rounded-full bg-white/10 flex items-center justify-center' size={'9px'}/>
                            <h3 className="font-bold text-white text-[18px] mb-[14.4px]" x-text="step.title">Drive Sales with AI Ads</h3>
                            <p className="text-gray-400" x-text="step.description">Leverage our advanced ad strategies
to generate consistent, profitable traffic
that scales your business.</p>
      </div>
      </Tbreveal>
      <Tbreveal delay={.55}>
      <div className="rounded-[14.4px] p-[28.8px] transform hover:scale-105 duration-300 ease-in-out transition-all hover:bg-secondary shadow-xl bg-gray-800">
                            <div className="text-[21.6px] font-bold text-white/50 mb-[21.6px]" x-text="step.number">03</div>
                            <IoIosFlash className='mb-[72px] w-[57.6px] h-[57.6px] p-[7.2px] rounded-full bg-white/10 flex items-center justify-center' size={'9px'}/>
                            <h3 className="text-[18px] mb-[14.4px] font-bold text-white " x-text="step.title">Automate &amp; Scale</h3>
                            <p className="text-gray-400" x-text="step.description">Learn how to automate daily tasks, hire virtual assistants when needed, and scale up without burning out.</p>
      </div>
      </Tbreveal>
      </div>
    </article>
  )
}

export default Fragment