import React from 'react'
import Sidereveal from '../Utills/Sidereveal'
import Tbreveal from '../Utills/Tbreveal'

const Fragment3 = () => {
  return (
    <div class="relative timeline mb- bg-[#01031a]">
                    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600/20"></div>
                    <div class="grid gap-12">
                        <div class="flex items-center aos-init aos-animate" data-aos="fade-up">
                            <div class="w-1/2 pr-16 text-right">
                                                <Sidereveal x={-60}>
                                {/* <h4 class="text-2xl font-bold text-indigo-400">1</h4> */}
                                <h5 class="text-xl font-semibold text-white mb-2">Get Mentored 1-on-1</h5>
                                <p class="text-gray-400">No courses. No group chats. Real, personalized support to guide you every step — from scratch to scale.</p>
                                                </Sidereveal>
                            </div>
                            <div class="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
                            <div class="w-1/2"></div>
                        </div>
                        <div class="flex items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div class="w-1/2"></div>
                            <div class="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
                            <div class="w-1/2 pl-16">
                        <Sidereveal x={50} duration={.4}>
                                {/* <h4 class="text-2xl font-bold text-indigo-400">2</h4> */}
                                <h5 class="text-xl font-semibold text-white mb-2">Copy What Works</h5>
                                <p class="text-gray-400">Use proven product research, ad strategies, and supplier networks that have helped beginners hit $1K days.</p>
                        </Sidereveal>
                            </div>
                        </div>
                        <div class="flex items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                            <div class="w-1/2 pr-16 text-right">
                        <Sidereveal x={-60}>
                                {/* <h4 class="text-2xl font-bold text-indigo-400">3</h4> */}
                                <h5 class="text-xl font-semibold text-white mb-2">Build, Launch & Scale</h5>
                                <p class="text-gray-400">Together, we build your store, test winning products, launch real ads — and scale with confidence and clarity.</p>
                        </Sidereveal>
                            </div>
                            <div class="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
                            <div class="w-1/2"></div>
                        </div>
                    </div>
                </div>
  )
}

export default Fragment3