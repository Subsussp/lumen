import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Sidereveal = ({children, delay , x, duration,classes}) => {
  let ref = useRef(null);
  let isInView = useInView(ref,{once:true})
  const maincontrols = useAnimation()
  useEffect(()=>{
    if(isInView){
      maincontrols.start('visible')
    }
  },[isInView])
  return (
    <motion.div className={classes+ 'w-full'} ref={ref} variants={{init:{opacity:0,x: x ? x : 40},visible:{opacity:1,x:0}} } transition={{delay: delay ? delay : .25, duration: duration? duration : 0.3}} initial={'init'} animate={maincontrols}>{children}</motion.div>
  )
}

export default Sidereveal