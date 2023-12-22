import React from 'react'
import shoe from '../assets/shoe_image.png'
import flipkart from "../assets/flipkart.png"
import amazon from '../assets/amazon.png'

export default function () {
  return (
    <div className='flex gap-16' style={{width:"1125px",height:"613px",marginTop:"60px",marginLeft:"157px"}}>
        <div style={{width:"610px",height:"306px"}} >
            <div style={{fontSize:"100px",fontFamily:"poppins",lineHeight:"90px",fontWeight:'800'}}>
                <p>YOUR FEET DESERVES THE BEST</p>
            </div>
            <div style={{width:"404px",height:"91px"}} className="mt-4">
                <p style={{fontSize:"16px",lineHeight:"24px",fontFamily:"poppins"}}>YOUR FEET DESERVES THE BEST, AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVES THE BEST, AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
            </div>
            <div className=' mt-5 flex justify-between font-bold ' style={{width:"331px",height:"41px"}}>
                <button className='text-white r' style={{backgroundColor:"rgba(208,28,40,1)",width:"150px",height:"41px"}}>Shop Now</button>
                <button className='border-2 border-slate-500' style={{backgroundColor:"white",width:"141px",height:"41px"}}>Category</button>
            </div>
            <div className='mt-6'>
                <p>Also Available on</p>
            </div>
            <div className='flex gap-5 mt-2'>
                <img src={flipkart} alt="flipkart icon" />
                <img src={amazon} alt="amazon icon" />

            </div>
        </div>
        <div className='mt-12 ml-10'>
            <img src={shoe} style={{width:"530px",height:"487px"}} alt="shoe image" />

        </div>
    </div>
  )
}
