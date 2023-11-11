import React from 'react'

function Header() {
    
  return (
    <div className='sm:flex justify-between h-28 bg-gray-800 text-white p-8' >
        <div className='text-2xl md:text-5xl  font-bold' style={{'fontFamily':'Roboto'}}>
            <span className='text-amber-300'>MANISHA</span> <span className='text-cyan-300'> OFFSET</span>
        </div>
        
        <div className='hidden block sm:text-md md:text-xl list-none sm:flex'>
            <li className='px-2'><a href='#contact'>Contact us</a></li>
            <li className='px-2'><a href='#services'>Services</a></li>
            <li className='px-2'><a href='#about'>About</a></li>
        </div>
    </div>
  )
}

export default Header