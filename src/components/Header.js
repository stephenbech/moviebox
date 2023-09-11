import React from 'react'
import { Image } from './Images'
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'
function Header() {
  return (
    <div>
      <Image alt='poster' path={"/Poster.svg"} data-testid='poster' className='absolute inset-0 -z-10 h-full w-full object-cover'/>
      <div className=' flex flex-nowrap px-20 justify-around  mt-5'>
            <Image alt='logo' path={"/Logo.svg"} data-testid='logo' className='h-10 ' />
            <div className=' flex ml-2 items-center rounded-lg border-2 w-96 p-1'>
                
                <input 
                  className=' flex ml-2   bg-transparent outline-none w-full font text-white placeholder-white flex-shrink' 
                  type="search" 
                  placeholder='What do you want to watch?' 
                />
                <MagnifyingGlassIcon className='  h-6 text-white ' />
              </div>
            <div className='flex space-x-4'>
                  <h4 className='text-white text-base font-bold leading-normal font text-center mt-2'>
                        Signin
                  </h4>
                  <Image className='bg-red-700 rounded-3xl p-2' path={'/Menualt4.svg'}/>
            </div>
      </div>
    </div>
  )
}

export default Header