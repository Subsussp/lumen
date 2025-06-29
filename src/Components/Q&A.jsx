import { ArrowBigRight, ArrowDown, ArrowDown01, ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import QandAlist from './Files/Q&a'

const Qa = () => {
  let [Catg,setCatg] = useState('Mentorship')
  let [Showtabs,setShowtabs] = useState(false)
  let [showA,setshowA] = useState()
  return (
    <section className=' bg-[#01031a]/100 to-[#01031a]/80'>
      <div className='pb-40'>
        <div className='flex flex-col  md:flex-row gap-8 py-5 pl-2'>
            <button onClick={()=>setShowtabs(!Showtabs)} className={`text-center md:hidden w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-700/50 text-white`}>FAQ</button>
          <div className={`md:w-1/4 mx-auto ${Showtabs ? '':'hidden'}`}>
          <div className='bg-gray-800/50 rounded-xl p-4 sticky top-24'> 
          <div className={`space-y-2`}>
            <button onClick={()=>setCatg('Mentorship')} className={`justify-self-start w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-700/50 text-white`} style={Catg == 'Mentorship' ? {'backgroundColor':'var(--secondary)'} : {}}>Mentorship FAQ</button>
            <button onClick={()=>setCatg('Pricing')} className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-white hover:bg-gray-700/50`} style={Catg == 'Pricing' ? {'backgroundColor':'var(--secondary)'} : {}}>Prcing FAQ</button>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=sofaomda738@gmail.com' target="_blank" rel="noopener noreferrer" className={`w-full block text-left px-4 py-3 rounded-lg transition-all duration-300 text-white hover:bg-gray-700/50`} >Support</a>
          </div>
          </div>
        </div>
          {/* <div className='flex '> */}
  <ul className='flex flex-col justify-center px-4 gap-4 md:w-3/4 text-white font-Second'>
    {QandAlist[Catg].map((value,index)=>{
      return <div key={index} onClick={() => (index == showA ? setshowA(null) : setshowA(index))} className="bg-gray-800/50  rounded-xl overflow-hidden transition-all duration-300 ">
					<li key={index} className="p-6 cursor-pointer flex justify-between items-center ">
						<h1 className="text-base md:text-xl">
							{value.Q}
						</h1>
						<ArrowDown className="w-5 h-5 items-center justify-self-end" />
					</li>
					<div className={`row-span-2 px-6 text-sm text-zinc-400 md:text-base pb-4 ${showA !== index && "hidden"}`}>
						{value.A}
					</div>
				</div>;
    })}
  </ul>
          {/* </div> */}
          <div className='md:w-1/4 mr-6 hidden md:inline'>
          <div className='bg-gray-800/50 rounded-xl p-4 sticky top-24'> 
          <div className='space-y-2'>
            <button onClick={()=>setCatg('Mentorship')} className={`justify-self-start w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-700/50 text-white`} style={Catg == 'Mentorship' ? {'backgroundColor':'var(--secondary)'} : {}}>Mentorship FAQ</button>
            <button onClick={()=>setCatg('Pricing')} className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-white hover:bg-gray-700/50`} style={Catg == 'Pricing' ? {'backgroundColor':'var(--secondary)'} : {}}>Prcing FAQ</button>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=sofaomda738@gmail.com' target="_blank" rel="noopener noreferrer" className={`w-full block text-left px-4 py-3 rounded-lg transition-all duration-300 text-white hover:bg-gray-700/50`} >Support</a>
          </div>
          </div>
        </div>
        </div>
      </div>
      </section>
  )
}
export default Qa