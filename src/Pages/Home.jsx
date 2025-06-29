import React, { useEffect ,useState} from 'react'
import Header from '../Components/Header'
import About from '../Components/about'
import Reviews from '../Components/reviews'
import Fraqment from '../Components/Fraqment'
import transition from '../transition'
import Fragment2 from '../Components/Fragment2'
import Fragment3 from '../Components/Fragment3'
import Plans from '../Components/Plans'
import Qa from '../Components/Q&A'

const Home = ({}) => {
  
useEffect(() => {
  (async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    const locomotiveScroll = new LocomotiveScroll();
  })(); 
}, []);

    return (
        <>
         
    <div>
        <Header />
        <Fraqment/>
        <Fragment2/>
        <Fragment3/>
        <Plans/>
        {/* <About/> */}
        {/* <Reviews/> */}
        <Qa/>
        {/* <div className='h-[200vh]'></div> */}
    </div>
    </>
    
  )
}

export default transition(Home);