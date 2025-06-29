import React from 'react'
import transition from '../transition';
import { PhoneCallIcon } from 'lucide-react';
import { BiMobile } from 'react-icons/bi';

const About = () => {
  const text = `Most people fail at dropshipping not because they’re lazy—but because nobody’s showing them the right way. 

At MentorFlowX, we don’t just give you info—we hand you the blueprint, walk with you step-by-step, and help you build a store that actually brings in bread.

If you're tired of wasting time watching YouTube, or buying overpriced “courses” with no support, you’re in the right place. We’ll help you set up your Shopify store, find winning products, launch profitable ads, and scale up—all while keeping it simple, real, and result-driven.

--------`;
  const text2 = `People fail because they:

Pick the wrong products

Run ads that don’t convert

Build stores that look sketchy

Quit after wasting time and cash

We fix all that.
With our mentorship, you’ll skip the confusion and go straight into building something that actually works.` 
  const text3 = `🔍 Product Research (No Guesswork)
We’ll help you find products that are hot, trending, and not oversaturated—the kind that actually sell.

🛒 Store Setup That Converts
Your store won’t just look clean—it’ll be built to convert and make buyers trust you on sight.

📈 Facebook & TikTok Ads That Print
Learn how to run smart ads with a budget—even if you’re starting with $100. We teach you how to scale up from there.

💸 COD Strategy (Advanced Game)
We also teach Cash On Delivery (COD) dropshipping for untapped countries where card payments aren’t the norm—less competition, higher conversion.
`
 const text4 = `✅ 1-on-1 Mentorship (WhatsApp)

No group chats, no delays

Get direct help daily

Ask anything, anytime

✅ Personalized Roadmap
We help you based on your budget, location, and speed. Whether you wanna go slow or fast, we adapt the game to your level.

✅ Optional DFY Setup (Elite Plan)

We build your store

Pick your product

Launch ads for you

Help you scale to $1K/day`
const text5 = `
There’s levels to this. And we play at the one that gets results.

🔥 1-on-1 private mentorship
🔥 Real strategies that work in 2025
🔥 Fast support—no waiting for replies
🔥 COD secrets most gurus don’t talk about
🔥 Results > fluff. Always.

How to Start
DM us on Instagram [@MentorFlowX] - click the link below

We’ll walk you through your options

Lock in, get mentored, and let’s get this money

Don’t keep guessing. Let’s build you something real that pays.
`
  return (
    <div className=' mx-auto px-6 py-24 bg-[#01031a]'>
    <div className='p-8 mb-10  md:px-14 border-green bg-gray-950 shadow-lg rounded-xl md:p-14 md:text-lg leading-relaxed font-medium text-gray-200 max-w-5xl mx-auto border border-gray-800 border-2'>
      <pre className='whitespace-pre-wrap text-lg font-semibold text-gray-300'>
      <span className='md:text-4xl flex flex-col text-white text-2xl whitespace-pre-line w-full mt-3 font-Second text-center  justify-center'>Welcome to MentorFlowX 
    <br/>   
    <p className='text-center text-xs lg:text-4xl text-blue-600'>Where Real Ones Learn to Win with Dropshipping</p></span>

<p className='mt-3 mb-3 text-sm lg:text-lg whitespace-pre-line '>
  {text}
</p>
<span className='md:text-4xl mt-3 text-2xl font-Second text-blue-600'>Why Most Beginners Fail (And How We Flip That)</span>
<p className='mt-3 whitespace-pre-line text-sm md:text-lg mb-3 '>
  {text2}
</p>
<span className='md:text-4xl mt-3 text-2xl font-Second text-blue-600'>
What You’ll Learn with MentorFlowX
</span>
<p className='mt-3 whitespace-pre-line text-sm md:text-lg mb-3'>
{text3}
</p>
<span className='md:text-4xl mt-3 text-2xl font-Second text-blue-600'>
What You Get When You Join MentorFlowX
</span>
<p className='mt-3 whitespace-pre-line text-sm md:text-lg mb-3'>
{text4}
</p>
<span className='md:text-4xl text-2xl mt-3 font-Second text-blue-600'>  
Why MentorFlowX?
  </span>
<p className='mt-3 whitespace-pre-line text-sm md:text-lg mb-3'>
{text5}
</p>
      </pre>
<h1 className='text-center text-white text-2xl font-Main md:text-4xl mt-10 mb-10' >Join MentorFlowX today!</h1> 
<div className='text-center'>
<a target="_blank" href='https://form.jotform.com/250372428512048' className='text-sm py-2 px-4 md:text-xl bg-blue-800 hover:bg-blue-900 text-white font-Second md:py-3 md:px-6 rounded-lg shadow-lg transition duration-300 align-center text-center'>Secure Your Future Now</a>
</div>
    </div>
</div>
  )
}

export default transition(About);