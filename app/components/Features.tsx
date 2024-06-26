import React from 'react';
import Image from 'next/image';
import FeatureImg1 from '../../public/assets/feature-1.svg';
import FeatureImg2 from '../../public/assets/feature-2.svg';
import FeatureImg3 from '../../public/assets/feature-3.svg';
import CheckIco from '../../public/assets/check.svg';


const Features = () => {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px]'>
        <div className='flex flex-col'>
            <div>
                <h3 className='font-medium text-[#0085ff]'>Sales Monitoring</h3>
                <h1 className='pt-[12px] text-2xl font-medium text-[#172026]'>Simply your sales monitoring
                </h1>
                <Image src={FeatureImg1} alt='img-feature1' className='pt-[24px]'/>
                <div className='py-[24px] text-[#36485C]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem labore corporis ipsum officia quis deserunt asperiores ducimus maxime, iste nostrum non esse unde. Delectus voluptatum magnam ipsa adipisci tenetur.
                </div>
                {/* list */}
                <ul className='flex flex-col gap-y-3'>
                    <li className='flex items-center gap-x-2 text-[#36485c]'>
                      <span><Image src={CheckIco} alt='ico-check'/></span>
                      Lorem ipsum dolor, sit amet. 
                    </li>
                    <li className='flex items-center gap-x-2 text-[#36485c]'>
                      <span><Image src={CheckIco} alt='ico-check'/></span>
                      Dolorum voluptatem labore  
                    </li>
                    <li className='flex items-center gap-x-2 text-[#36485c]'>
                      <span><Image src={CheckIco} alt='ico-check'/></span>
                      Delectus voluptatum magnam
                    </li>

                </ul>
            </div>

        </div>
    </div>
  )
}

export default Features