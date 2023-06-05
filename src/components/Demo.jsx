import React from 'react'
import { useEffect,useState } from 'react';
import{copy,loader,linkIcon,tick} from '../assets';
import { fromJSON } from 'postcss';

const Demo = () => {
  return (
    <section className='mt-16 w-full max-w-xl'>

      {/*Search Bar */}
      <div className='flex flex-col w-full gap-2'>

        <form 
        className='relative flex justify-center items-center '
        onSubmit={()=>{}}
        >
          <img 
          src={linkIcon}
          className='absolute left-0 my-2 ml-3 w-5'
          />

          <input
          type='url'
          placeholder='Enter a URL'
          value=''
          onChange={()=>{

          }}
          required
          className='url_input peer'
          />

          <button
          type='submit'
          className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
          >
            <p>↵</p>
          </button>
        </form>
      </div>

      {/*Browse URL History */}
    </section>
  )
}

export default Demo