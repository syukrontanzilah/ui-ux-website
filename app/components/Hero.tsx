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
    <div className='pt-4 lg:pt-10'>
        <div className='px-[20px] lg:px-[280px]'>
            <h1 className='text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]'>Start monitoring your website like a pro</h1>
            <div className='text-center pt-6 text-[#36485c] lg:text-[18px] lg:leading-7'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam odio quibusdam. Error explicabo corrupti, necessitatibus cumque amet veniam excepturi suscipit ratione soluta illo distinctio aut sit sint numquam aliquam?
            </div>
            {/* button */}
            <div className='flex w-full pt-8 justify-center gap-x-2 lg:gap-x-6'>
                <button className='bg-[#4328eb] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit'>Try for free</button>
                <button className=' w-1/2 py-4 px-8 text-[#4328eb] flex items-center justify-center  gap-x-2 lg:w-fit'>
                View Pricing <span>
                <Image src={BlurArrow} alt='arrow'/>                    
                </span>

                </button>
            </div>
        </div>

        {/* image hero */}
        <div className='relative flex h-full w-full justify-center'>
            <Image 
            className='min-h-[500px] w-full object-cover lg:h-auto'
            src={Gradient} 
            alt='img-gradient' 
            />

            <div className='absolute bottom-5 flex w-full flex-col items-center'>
            <Image 
            src={HeroImg} 
            alt='hero-img' 
            className='-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]'
            />
            {/* companies */}
            <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20'>
                <div className='text-[#ffffff] text-center text-[18px]'>Trusted by these companies</div>
                {/* list companies image */}
                <div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5'>
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