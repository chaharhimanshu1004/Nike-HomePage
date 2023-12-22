import React from 'react'
import logo from '../assets/brand_logo.png'

export default function Navbar() {
  return (
    <div className='pt-4'>
    <div className='flex justify-between'>
        <div className='pl-12 '>
            <img src={logo} alt="logo of nike" />
        </div>
        <div className='flex gap-[24px] text-base font-bold pt-1'>
            <p>MENU</p>
            <p>LOCATION</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
        </div>
        <div className='mr-12 flex justify-center font-bold text-white' style={{width:"75px",height:"31px",backgroundColor:"rgba(208,28,40,1)"}}>
            <button>Login</button>
        </div>
    </div>

    </div>
  )
}
