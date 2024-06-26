import React from 'react';
import BlurArrow from '../../public/assets/blue-button.svg';
import Image from 'next/image';
import Gradient from '../../public/assets/Gradient.svg';
import HeroImg from '../../public/assets/Image.svg';
import GoogleImg from '../../public/assets/Google.svg';
import SlackImg from '../../public/assets/Slack.svg';
import Truspilot from '../../public/assets/Trustpilot.svg';
import CnnImg from '../../public/assets/CNN.svg';
import CluthImg from '../../public/assets/Clutch.svg';


const Hero = () => {
  return (
    <div className='pt-4'>
        <div className='px-[20px]'>
            <h1 className='text-center text-[32px] leading-[40px] font-medium text-[#172026]'>Start monitoring your website like a pro</h1>
            <div className='text-center pt-6 text-[#36485c] '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam odio quibusdam. Error explicabo corrupti, necessitatibus cumque amet veniam excepturi suscipit ratione soluta illo distinctio aut sit sint numquam aliquam?
            </div>
            {/* button */}
            <div className='flex w-full pt-8'>
                <button className='bg-[#4328eb] w-1/2 py-4 px-8 text-white rounded-[4px]'>Try for free</button>
                <button className=' w-1/2 py-4 px-8 text-[#4328eb] flex items-center justify-center bg-pink-100 gap-x-2 '>
                View Pricing <span>
                <Image src={BlurArrow} alt='arrow'/>                    
                </span>

                </button>
            </div>
        </div>

        {/* image hero */}
        <div className='relative flex h-full w-full justify-center'>
            <Image 
            className='min-h-[500px] w-full object-cover'
            src={Gradient} alt='img-gradient' />

            <div className='absolute bottom-5 flex w-full flex-col items-center'>
            <Image src={HeroImg} alt='hero-img' className='-ml-4 h-[310px]'/>
            {/*  */}
            <div className='flex w-full flex-col items-center'>
                <div className='text-[#ffffff] text-center'>Trusted by these companies</div>
                {/* list companies image */}
                <div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle'>
                <Image src={GoogleImg} alt='google'/>
                <Image src={SlackImg} alt='slack'/>
                <Image src={Truspilot} alt='truspilot'/>
                <Image src={CnnImg} alt='cnn'/>
                <Image src={CluthImg} alt='cluth'/>
                </div>

            </div>
            </div>
        </div>

    </div>
  )
}

export default Hero