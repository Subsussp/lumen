import React, { useState } from 'react'
import transition from '../transition'
import { MdEmail } from 'react-icons/md'

const Contactpage = () => {
  let [clicked,setClicked] = useState(false)
  return (
    <section style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-108740.jpg")`,
      }} className='bg-no-repeat bg-cover bg-center w-screen h-screen'> 
    <img src='logo.jpg' className='w-[86.4px] h-[86.4px] scale-[1.3] bg-no-repeat bg-cover bg-center absolute top-[17%] left-[50%] translate-x-[-50%] rounded-[10.8px] shadow-lg' alt='bg'/>
    <div>
      <div className='absolute top-[35%] flex flex-col px-[14.4px] w-full left-[50%] translate-x-[-50%]'>
      <h2 className='text-4xl sm:text-5xl text-white text-center font-Second '>Connect with me Right now</h2>
      <p className='text-md sm:text-lg text-zinc-100/30 text-center font-Second font-thin mt-2'>I'm just a click away. Pick your favorite platform and let’s connect.
</p>
          <div className='grid md:grid-cols-3 gap-6 mt-2  py-4 px-[14.4px]'>
                  <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/mentorflowx/' className='group relative rounded-[14.4px] p-[28.8px] bg-white/10 flex justify-center transform transition-all duration-300 hover:shadow-red-400/40 hover:shadow-lg transition-shadow '>
                    <img src="https://static.cdninstagram.com/rsrc.php/v4/yI/r/VsNE-OHk_8a.png" className='z-50 transform transition-all duration-200 scale-[1.12] group-hover:ml-[-63%] ' alt="" />
                    <h1 className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-Main text-2xl transform transition-all text-white duration-400 opacity-0 group-hover:opacity-100 '>@MentorFlowX</h1>
                  </a> 
                  <a target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=639615852656&text=Hi%MentorFlowX%20am%20interested%20in%20your%20mentorship%20program' className='group relative rounded-2xl bg-white/10 p-8 flex justify-center transform transition-all hover:shadow-green-400/40 hover:shadow-xl transition-shadow duration-300"'>
                    <img src="./whatsapplogo.png" className='z-5 w-8 h-8 scale-[1.4] transform transition-all duration-200' alt="" />
                    <h1 className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2 font-Main text-2xl transform transition-all text-white duration-400 opacity-0 group-hover:opacity-100 '>Whatsapp Number</h1>
                  </a> 
                  <a target="_blank" rel="noopener noreferrer" href='https://t.me/Mentorflowx' className='group relative rounded-[14.4px] p-[28.8px]  bg-white/10  flex justify-center transform transition-all duration-300 hover:shadow-blue-400/40 hover:shadow-xl transition-shadow"'>
                    <img src="https://telegram.org/img/website_icon.svg" className='z-50 transform transition-all duration-200 md:scale-[1.4] scale-[2.3] group-hover:ml-[-63%] ' alt="" />
                    <h1  className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-Main text-2xl transform transition-all text-white duration-400 opacity-0 group-hover:opacity-100 '>@Mentorflowx</h1>
                  </a> 
                  <h1 onClick={()=> setClicked(!clicked)} rel="noopener noreferrer" className='relative rounded-[14.4px] p-[28.8px] bg-white/10 flex justify-center transform transition-all cursor-pointer	hover:shadow-white/40 hover:shadow-xl transition-shadow duration-300'>
                    <MdEmail size={36} className={`nos transform transition-all duration-200 z-50 scale-[1.2] ${clicked && 'md:ml-[-72%] ml-[-92%]'}`}/>
                  </h1> 
                    <h2 className={`text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-Second text-xl transform transition-all text-white duration-400 opacity-0 nos ${clicked && 'opacity-100'} `}>anonyms@gmail.com</h2>
      </div>
      
</div>
          </div>
      </section>
  )
}

export default transition(Contactpage)