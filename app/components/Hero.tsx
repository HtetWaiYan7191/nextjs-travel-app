
"use client"
import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
        <div className="absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover
     bg-center md:-right-28 xl:-top-60"></div>

        <div className="relative z-20 flex flex-1 flex-col xl:w-[70%]">
            <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"/>

            <h1 className='hero-title font-bold text-5xl lg:text-8xl mt-8'>
            Putuk Truno Camp Area
            </h1>

            <p className='text-gray-600 text-sm mt-8 leading-6 '>
                We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app 
            </p>

            <div className='review-container mt-5 flex items-center gap-5'>
                <div className='star-container flex '>
                    {Array(5).fill(1).map((_, index) => (
                        <Image src='/star.svg' alt='star-image'
                        width={24} height={24}/>
                        
                    ))}
                </div>

                <div className="text-container flex gap-4 items-center">
                        <span className='font-bold text-sm md:text-normal lg:text-normal'>198k</span>
                        <span className='text-gray-500 text-sm md:text-normal lg:text-normal'>Excellent Reviews</span>
                </div>  
            </div>

            <div className='button-container flex flex-col lg:flex-row mt-7'>
                <Button type="button" title="Download App" variant="btn_green"/>
                <Button type="button" title="How we work?" icon='/play.svg' variant="btn_white_text"/>
            </div>

        </div>

        <div className='relative flex flex-1 location-wrapper'>
            <div className='location-wrapper bg-black/80 flex flex-col rounded-xl px-3 py-2 overflow-hidden w-[60%] lg:w-[80%] lg:h-[150px] justify-center'>
                <div className="location flex justify-between items-center  pt-4 ">
                    <h2 className='text-gray-400 text-sm lg:text-normal'>Location</h2>
                    <Image src='/close.svg' alt="close" width={24} height={24}/>
                </div>
                <h2 className='font-bold text-white'>Yangon</h2>

                <div className="distance flex flex-col mt-2">
                    <h2 className='text-gray-400 text-sm lg:text-normal'>Distance</h2>
                    <span className='font-semibold text-white'>128.08 km</span>
                </div>
            </div>
        </div>

        
    </section>
  )
}

export default Hero