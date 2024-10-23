import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
        <div className='hidden lg:block'>
        <Image src='/snow.png' alt='profile1' width={100} height={100}
        className='h-[100px] object-cover rounded-full absolute right-36'/>
        <Image src='/snow.png' alt='profile2' width={100} height={100}
        className='h-[100px] object-cover rounded-full absolute top-48 left-16'/>
        <Image src='/snow.png' alt='profile3' width={100} height={100}
        className='h-[100px] object-cover rounded-full absolute bottom-20 left-36'/>
        <Image src='/snow.png' alt='profile4' width={100} height={100}
        className='h-[100px] object-cover rounded-full absolute bottom-32 right-16'/>
        </div>
        <div className='text-center max-w-3xl'>
            <h2 className='font-bold text-[60px] text-slate-700'>Schedule your Appointment with Me!</h2>
            <h2 className='text-xl mt-5 text-slate-500'>NEED HELP SHOWELING SNOW? Schedule an Appointment Now to find the perfect time for me and you. </h2>
            <div className='flex gap-4 flex-col mt-5'>
                <h3 className='text-sm'>Sign Up free with Google and Facebook</h3>
                <div className=' flex justify-center gap-8'>
                    <Button className='p-7 flex gap-4'>
                        <Image src='/google.png' alt='google'
                        width={40} height={40}/>
                        Sign up with Google</Button>
                    <Button className='p-7 flex gap-4'>
                        <Image src='/facebook.png' alt='facebook'
                        width={40} height={40}/>
                        Sign up with Facebook</Button>
                </div>
                <hr></hr>
                <h2><Link href='' className='text-primary'>Sign up Free with Email.</Link> No Credit Card Required.</h2>
                <hr></hr>
                <h2 className='font-bold text-[40px] text-slate-700'>Pricing</h2>
                <h2 className='text-xl mt-5 text-slate-500'>I don't charge on an hour rate. I charge by the amount of days I go on a week and the amount of snow that has fallen. </h2>
                <hr></hr>
                <h2 className='font-bold text-[40px] text-slate-700'>Some Images of My Work!</h2>
                <div className='flex flex-col justify-center items-center'>
                <Image src='/work1.png' alt='work1' width={330} height={330}
                className='h-[300px] object-cover rotate-90'/>
                <Image src='/work2.png' alt='work2' width={300} height={300}
                className='h-[300px] object-cover'/>
                <Image src='/work3.png' alt='work3' width={330} height={330}
                className='h-[300px] object-cover rotate-90'/>
                <Image src='/work4.png' alt='work4' width={330} height={330}
                className='h-[300px] object-cover rotate-90'/>
                </div>
                <hr></hr>
                <h2 className='font-bold text-[40px] text-slate-700'>About Us</h2>
                <h2 className='text-xl mt-5 text-slate-500'>My name is Alvaro Bravo, I've lived for more than 30 years here in Lake Tahoe. I've been shoveling snow for around the same years
                I have turned it into a thriving buisness that it is today.</h2>
                <h2 className='text-xl mt-5 text-slate-500'>All of my work is done to make sure to satify all of my clients desires and request. My clients choose my work for the trust I create 
                with each one of them and for my hard work and dedication to provide my best service. </h2>
            </div>
        </div>
    </div>
  )
}

export default Hero
