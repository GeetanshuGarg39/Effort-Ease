import React from 'react'
import RegisterCard from '../components/RegisterCard'
import homeImg from "../assets/home.avif"

const Hero = () => {
  return (
    <>
    <div className='flex justify-around items-center font-raleway p-7 md:p-4 md:pl-6'>
        <div className='flex flex-col gap-4 lg:gap-20 '>
            <h1 className=' text-2xl font-semibold md:text-3xl lg:text-4xl'>Effortlessly Manage Your Tasks</h1>
            <RegisterCard />
        </div>
      <img className=' hidden md:block md:w-1/2 lg:w-auto' src={homeImg}></img>
    </div>
    </>
  )
}

export default Hero
