import React from 'react'

//logo
import {logo,sbLogo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex flex-col items-center justify-center'>

      <nav className='flex justify-between items-center w-full pt-3 mb-10'>

        <img src={sbLogo} alt="sumz_logo" className='w-34 h-24 object-contain'/>

        <button 
        onClick={()=>window.open("https://github.com/AnishPillai2002")}
        className='black_btn'
        >
          Github
        </button>

      </nav>

      <h1 className='head_text'>
        Your Ultimate Article Summarizer Powered by <br className='max-md:hidden'/>
         <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
      Say goodbye to information overload and hello to seamless 
      understanding with Smartbrief—an incredible open-source article summarizer. 
      Experience the magic as Smartbrief effortlessly distills lengthy articles 
      into captivating, crystal-clear summaries.

      </h2>

    </header>
  )
}

export default Hero