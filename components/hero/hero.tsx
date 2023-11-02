'use client';

import SearchInput from '../search-input';
import Image from 'next/image';
import HeroImage from '@/public/hero-image.png';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 h-full md:grid-cols-[2fr_1fr]'>
      <div className='max-w-[997px] w-full h-auto lg:h-[654px] flex justify-between flex-col gap-10'>
        <div className='flex flex-row items-start justify-start text-[40px] md:text-[60px] font-text-lg-semibold lg:flex-col'>
          <b className='relative tracking-[-0.5px] leading-[50px] md:leading-[70px] h-full min-h-[125px]'>
            <span className='text-mediumpurple-100'>
              {'Master Frontend & Backend Development: '}
            </span>
            Comprehensive Courses to Elevate Your Skills
          </b>
        </div>
        <div className='relative leading-[30px] max-w-[897px]'>
          <span>
            {
              "Join Horizon Learning and begin your journey today. Where courses are crafted to your career aspirations by industry experts. Dive into learning adventures that culminate in nationally recognized certifications, opening doors to exceptional opportunities. Ignite your potential—begin your journey with us today and chart a course to a brilliant future."
            }
          </span>
        </div>
        <SearchInput
          handleSearch={() => {}}
          onInputChanged={() => {}}
          inputClassName='rounded-[50px] h-[60px] md:h-[99px]'
          buttonClassName='md:h-[76px] md:min-w-[174px]'
        />
      </div>
      <Image
        src={HeroImage}
        height={812}
        width={609}
        alt='Hero image'
        className='hidden md:flex'
      />
    </div>
  );
};

export default Hero;
