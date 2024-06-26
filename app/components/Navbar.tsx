import Image from 'next/image'
import React from 'react';
import Logo from '../../public/assets/Logo.svg';
import User from '../../public/assets/User.svg';
import Menu from '../../public/assets/Menu.svg';
import {DataNavlink} from '../components/DataNavlink'

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20'>
    <div className='flex items-center bg-pink-50'>
        <Image src={Logo} alt='logo'/>
        <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
            {DataNavlink.map((item, i)=> {
                return(
                    <div className='text-[#36485c] font-medium' key={i}>{item.name}</div>
                )
            })}
        </div>
    </div>
    <div className='flex gap-x-5'>
        <div className='hidden lg:flex text-[#36485c] font-medium pr-[56px] bg-pink-300 items-center'>Open an Account</div>
        {/* icon user and sigin */}
        <div className='flex items-center gap-x-2 bg-pink-200'>
            <Image src={User} alt='user'/>
            <span className='hidden lg:block font-medium text-[#36485c]'>Sign in</span>
        </div>
        {/* burger menu mobile */}
        <div className='lg:hidden'>
            <Image src={Menu} alt='menu-btn'/>
        </div>
    </div>
    </nav>
  )
}

export default Navbar